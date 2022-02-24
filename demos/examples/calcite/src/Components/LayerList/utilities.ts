import Handles from "@arcgis/core/core/Handles";
import { whenEqualOnce } from "@arcgis/core/core/watchUtils";
import { CallBackData, LayerListViewModelState } from "./interfaces";

export function addLayerListHandlers({
  layerListVM,
  handles,
  callback
}: {
  layerListVM: __esri.LayerListViewModel;
  handles: Handles;
  callback?: (data: CallBackData) => void;
}): __esri.Handles {
  handles.removeAll();

  if (!layerListVM) {
    return;
  }

  const layerHandleGroup = "layers";

  const watchItem = (item: __esri.ListItem): void => {
    handles.add(
      [
        item.watch(
          [
            "title",
            "uid",
            "visible",
            "visibleAtCurrentScale",
            "updating",
            "open"
          ],
          () => callback?.call(null, item)
        ),
        item.children.on("change", watchItems)
      ],
      layerHandleGroup
    );

    item.children.forEach(child => watchItem(child));
  };

  const watchItems = (data: CallBackData): void => {
    callback?.call(null, data);
    handles.remove(layerHandleGroup);

    handles.add(
      layerListVM.operationalItems.on("change", () => {
        watchItems(layerListVM.operationalItems);
      }),
      layerHandleGroup
    );

    layerListVM.operationalItems.forEach((item: __esri.ListItem) =>
      watchItem(item)
    );
  };

  handles.add([
    layerListVM.watch("state", (layerListState: LayerListViewModelState) =>
      callback?.call(null, layerListState)
    ),
    whenEqualOnce(layerListVM, "state", "ready", (value: boolean) =>
      watchItems(value)
    )
  ]);
}
