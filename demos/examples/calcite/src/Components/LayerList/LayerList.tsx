import React, { useEffect, useState } from "react";
import "./LayerList.scss";

import Handles from "@arcgis/core/core/Handles";
import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";

import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-pick-list";
import "@esri/calcite-components/dist/components/calcite-pick-list-group";
import "@esri/calcite-components/dist/components/calcite-pick-list-item";
import "@esri/calcite-components/dist/components/calcite-action";
import {
  CalcitePanel,
  CalcitePickList,
  CalcitePickListGroup,
  CalcitePickListItem,
  CalciteAction,
} from "@esri/calcite-components-react";

interface LayerListProps {
  view: __esri.MapView;
}

const handles = new Handles();

function LayerList(props: LayerListProps) {
  const [layerListVM, setLayerListVM] = useState(null);

  useEffect(() => {
    if (props.view) {
      setLayerListVM(
        new LayerListViewModel({
          view: props.view,
        })
      );
    }
  }, [props.view]);

  useEffect(() => {
    if (layerListVM) {
      console.log("LAYER LIST VIEW MODEL: ", layerListVM);
    }
  }, [layerListVM]);

  const vm: LayerListViewModel = layerListVM;

  const listItemMap = new Map();

  return (
    <CalcitePanel>
      <CalcitePickList
        multiple={true}
        loading={vm?.state === "loading"}
        disabled={vm?.state === "disabled"}
      >
        {console.log(vm)}
        {vm?.operationalItems?.map((item) => {
          listItemMap.set((item as any).uid, item);

          return (
            <CalcitePickListItem
              className={!item.visibleAtCurrentScale ? "out-of-scale" : ""}
              label={item.title}
              selected={item.visible}
              value={(item as any).uid}
            >
              {item.children.length ? (
                <CalciteAction
                  icon={item.open ? "caret-down" : "caret-right"}
                  scale="s"
                  slot="actions-start"
                  text="Loading"
                />
              ) : null}
              {item.updating ? (
                <CalciteAction
                  loading={true}
                  onClick={() => (item.open = !item.open)}
                  scale="s"
                  slot="actions-end"
                  text="Loading"
                />
              ) : null}
            </CalcitePickListItem>
          );
        })}
      </CalcitePickList>
    </CalcitePanel>
  );
}

export default LayerList;
