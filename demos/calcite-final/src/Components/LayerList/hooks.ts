import Handles from "@arcgis/core/core/Handles";
import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";
import { useEffect, useState } from "react";
import { addLayerListHandlers } from "./utilities";

export function useLayerListViewModel(
  props: __esri.LayerListViewModelProperties
) {
  const { view } = props;
  const [layerListVM, setLayerListVM] = useState<LayerListViewModel>(null);
  const [state, updateState] = useState<LayerListViewModel["state"]>(null);
  const [operationalItems, updateOperationalItems] =
    useState<LayerListViewModel["operationalItems"]>(null);

  useEffect(() => {
    const handles = new Handles();

    addLayerListHandlers({
      layerListVM,
      handles,
      onStateChange: (state) => updateState(state),
      onOperationalItemsChange: (items) => updateOperationalItems(items),
    });

    return function cleanup() {
      handles.removeAll();
      handles.destroy();
    };
  }, [layerListVM]);

  useEffect(() => {
    const vm = new LayerListViewModel({
      view,
    });

    setLayerListVM(vm);

    return function cleanup() {
      vm.destroy();
    };
  }, [view]);

  return layerListVM;
}
