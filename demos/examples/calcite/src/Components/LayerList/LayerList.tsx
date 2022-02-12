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

  const [count, setCount] = useState(0);

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

  // todo: store and cleanup
  handles.add([
    vm?.watch("state", () => setCount(count + 1)),
    vm?.operationalItems?.on("change", () => setCount(count + 1)),
  ]);

  const renderItem = (item: __esri.ListItem) => {
    const value = (item as any).uid;
    const hasChildren = item.children.length;

    // todo: store and cleanup
    handles.remove(value);
    handles.add(
      item.watch(
        [
          "title",
          "uid",
          "visible",
          "visibleAtCurrentScale",
          "updating",
          "open",
          "children.length",
        ],
        () => setCount(count + 1)
      ),
      value
    );

    const itemNode = (
      <CalcitePickListItem
        className={!item.visibleAtCurrentScale ? "out-of-scale" : ""}
        key={value}
        label={item.title}
        onCalciteListItemChange={() => (item.visible = !item.visible)}
        selected={item.visible}
        value={value}
        {...(hasChildren ? { slot: "parent-item" } : {})}
      >
        {hasChildren ? (
          <CalciteAction
            icon={item.open ? "caret-down" : "caret-right"}
            onClick={() => (item.open = !item.open)}
            scale="s"
            slot="actions-start"
            text="Toggle children"
          />
        ) : null}
        {item.updating ? (
          <CalciteAction
            loading={true}
            scale="s"
            slot="actions-end"
            text="Loading"
          />
        ) : null}
      </CalcitePickListItem>
    );

    return hasChildren ? (
      <CalcitePickListGroup key={`${value}-group`}>
        {itemNode}
        {item.children.map(renderItem)}
      </CalcitePickListGroup>
    ) : (
      itemNode
    );
  };

  return (
    <CalcitePanel>
      <CalcitePickList
        multiple={true}
        loading={vm?.state === "loading"}
        disabled={vm?.state === "disabled"}
      >
        {vm?.operationalItems?.map(renderItem)}
      </CalcitePickList>
    </CalcitePanel>
  );
}

export default LayerList;
