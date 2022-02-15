import React, { useEffect, useState } from "react";
import "./LayerList.scss";

import Handles from "@arcgis/core/core/Handles";
import { watch, whenOnce } from "@arcgis/core/core/watchUtils";
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
  CalciteAction
} from "@esri/calcite-components-react";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const handles = new Handles();
  const [layerListVM, setLayerListVM] = useState<LayerListViewModel>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("COUNT: ", count);
  }, [count]);

  useEffect(() => {
    if (props.view) {
      setLayerListVM(
        new LayerListViewModel({
          view: props.view
        })
      );
    }
  }, [props.view]);

  const watchItems = (): void => {
    handles.removeAll();

    handles.add([
      layerListVM.watch("state", () => setCount(prev => prev + 1)),
      layerListVM.operationalItems.on("change", () =>
        setCount(prev => prev + 1)
      )
    ]);

    layerListVM.operationalItems.forEach(item => watchItem(item));

    //setCount(prev => prev + 1);
  };

  const watchItem = (item: __esri.ListItem): void => {
    const value = (item as any).uid;

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
          () => setCount(prev => prev + 1)
        ),
        item.children.on("change", () => setCount(prev => prev + 1))
      ],
      value
    );

    item.children.forEach(child => watchItem(child));

    //setCount(prev => prev + 1);
  };

  useEffect(() => {
    if (layerListVM) {
      whenOnce(layerListVM, "operationalItems.length", () => {
        watchItems();
      });

      return function cleanup() {
        handles.removeAll();
      };
    }
  }, [layerListVM]);

  const renderItem = (item: __esri.ListItem) => {
    const value = (item as any).uid;
    const hasChildren = item.children?.length;

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
        {item.open ? item.children.map(renderItem) : null}
      </CalcitePickListGroup>
    ) : (
      itemNode
    );
  };

  return (
    <CalcitePanel>
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

export default LayerList;
