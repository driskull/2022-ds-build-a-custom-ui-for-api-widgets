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

  const watchItems = (val): void => {
    callback?.call(null, val);
    handles.remove(layerHandleGroup);

    handles.add(
      layerListVM.operationalItems.on("change", watchItems),
      layerHandleGroup
    );

    layerListVM.operationalItems.forEach(item => watchItem(item));
  };

  handles.add([
    layerListVM.watch("state", (state: LayerListViewModelState) =>
      callback?.call(null, state)
    ),
    whenEqualOnce(layerListVM, "state", "ready", (value: Boolean) =>
      watchItems(value)
    )
  ]);
}
