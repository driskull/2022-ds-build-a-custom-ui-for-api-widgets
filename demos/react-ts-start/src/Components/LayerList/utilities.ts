import Handles from "@arcgis/core/core/Handles";
import { init } from "@arcgis/core/core/watchUtils";
import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";

export function addLayerListHandlers({
  layerListVM,
  handles,
  onStateChange,
  onOperationalItemsChange
}: {
  layerListVM: __esri.LayerListViewModel;
  handles: Handles;
  onStateChange?: (state: LayerListViewModel["state"]) => void;
  onOperationalItemsChange?: (
    operationalItems: LayerListViewModel["operationalItems"]
  ) => void;
}): __esri.Handles {
  handles.removeAll();

  if (!layerListVM) {
    return;
  }

  const layerHandleGroup = "layers";

  // const watchItem = (item: __esri.ListItem): void => {
  //   handles.add(
  //     [
  //       item.watch(
  //         [
  //           "title",
  //           "uid",
  //           "visible",
  //           "visibleAtCurrentScale",
  //           "updating",
  //           "open"
  //         ],
  //         () => operationalItemsChanged()
  //       ),
  //       item.children.on("change", watchItems)
  //     ],
  //     layerHandleGroup
  //   );

  //   item.children.forEach(child => watchItem(child));
  // };

  // const operationalItemsChanged = () => {
  //   onOperationalItemsChange?.call(null, layerListVM.operationalItems.clone());
  // };

  // const watchItems = (): void => {
  //   operationalItemsChanged();
  //   handles.remove(layerHandleGroup);

  //   handles.add(
  //     layerListVM.operationalItems.on("change", () => watchItems()),
  //     layerHandleGroup
  //   );

  //   layerListVM.operationalItems.forEach((item: __esri.ListItem) =>
  //     watchItem(item)
  //   );
  // };

  // handles.add(
  //   init(layerListVM, "state", (state: LayerListViewModel["state"]) =>
  //     onStateChange?.call(null, state)
  //   )
  // );

  // watchItems();
}
