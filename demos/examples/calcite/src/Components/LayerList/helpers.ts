import Handles from "@arcgis/core/core/Handles";
import { whenEqualOnce } from "@arcgis/core/core/watchUtils";

export function watchLayerListVM(
  layerListVM: __esri.LayerListViewModel,
  callback: () => void
): () => void {
  if (!layerListVM) {
    return;
  }

  const handles = new Handles();
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
            "open",
          ],
          () => callback.call(null)
        ),
        item.children.on("change", watchItems),
      ],
      layerHandleGroup
    );

    item.children.forEach((child) => watchItem(child));
  };

  const watchItems = (): void => {
    callback.call(null);
    handles.remove(layerHandleGroup);

    handles.add(
      layerListVM.operationalItems.on("change", watchItems),
      layerHandleGroup
    );

    layerListVM.operationalItems.forEach((item) => watchItem(item));
  };

  handles.add([
    layerListVM.watch("state", () => callback.call(null)),
    whenEqualOnce(layerListVM, "state", "ready", watchItems),
  ]);

  return function cleanup() {
    handles.removeAll();
    handles.destroy();
  };
}
