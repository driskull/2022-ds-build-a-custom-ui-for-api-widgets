import React from "react";
import "./LayerList.scss";
import { useLayerListViewModel } from "./hooks";

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

function LayerList(props: __esri.LayerListViewModelProperties) {
  const layerListVM = useLayerListViewModel(props);

  return (
    <CalcitePanel heading="Layers">
      <CalcitePickList
        multiple={true}
        loading={layerListVM?.state === "loading"}
        disabled={layerListVM?.state === "disabled"}
      >
        {layerListVM?.operationalItems?.map(renderItem)}
      </CalcitePickList>
    </CalcitePanel>
  );
}

const renderItem = (item: __esri.ListItem) => {
  const value = (item as any).uid;
  const hasChildren = item.children?.length;

  const itemNode = (
    <CalcitePickListItem
      className={!item.visibleAtCurrentScale ? "out-of-scale" : ""}
      key={value}
      label={item.title}
      onCalciteListItemChange={() => (item.visible = !item.visible)}
      value={value}
      {...(item.visible ? { selected: true } : {})}
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
      {item.open ? item.children.map(renderItem) : null}
    </CalcitePickListGroup>
  ) : (
    itemNode
  );
};

export default LayerList;
