import Handles from "@arcgis/core/core/Handles";
import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";
import { useEffect, useState } from "react";
import { addLayerListHandlers } from "./utilities";
import Collection from "@arcgis/core/core/Collection";
import { CallBackData, LayerListViewModelState } from "./interfaces";

export function useLayerListViewModel(
  props: __esri.LayerListViewModelProperties
) {
  const { view } = props;
  const [layerListVM, setLayerListVM] = useState<LayerListViewModel>(null);
  const [state, updateState] = useState<LayerListViewModelState>(null);
  const [operationalItems, updateOperationalItems] = useState<
    __esri.Collection<__esri.ListItem>
  >(new Collection());

  useEffect(() => {
    const handles = new Handles();

    addLayerListHandlers({
      layerListVM,
      handles,
      callback: (data: CallBackData) => {
        if (typeof data === "string") {
          if (state === "ready") {
            updateState(data);
          }
        } else if (typeof data === "boolean") {
          if (data) {
            updateState("ready");
          }
        } else {
          const prevCollection = operationalItems;
          const updatedCollection = new Collection([...operationalItems, data]);
          updateOperationalItems(updatedCollection);
          prevCollection.removeAll();
          prevCollection.destroy();
        }
      }
    });

    return function cleanup() {
      handles.removeAll();
      handles.destroy();
    };
  }, [layerListVM]);

  useEffect(() => {
    const vm = new LayerListViewModel({
      view
    });

    setLayerListVM(vm);

    return function cleanup() {
      vm.destroy();
    };
  }, [view]);

  return layerListVM;
}
