import React, { useEffect, useState } from "react";
import "./LayerList.scss";

import Handles from "@arcgis/core/core/Handles";
import { whenEqualOnce } from "@arcgis/core/core/watchUtils";
import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const handles = new Handles();
  const layerHandleGroup = "layers";
  const [layerListVM, setLayerListVM] = useState<LayerListViewModel>(null);
  const [count, setCount] = useState(0);

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
    handles.remove(layerHandleGroup);

    handles.add(
      layerListVM.operationalItems.on("change", () => {
        watchItems();
        setCount(prev => prev + 1);
      }),
      layerHandleGroup
    );

    layerListVM.operationalItems.forEach(item => watchItem(item));
  };

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
          () => setCount(prev => prev + 1)
        ),
        item.children.on("change", () => {
          watchItems();
          setCount(prev => prev + 1);
        })
      ],
      layerHandleGroup
    );

    item.children.forEach(child => watchItem(child));
  };

  useEffect(() => {
    if (layerListVM) {
      handles.add([
        layerListVM.watch("state", () => setCount(prev => prev + 1)),
        whenEqualOnce(layerListVM, "state", "ready", () => {
          watchItems();
        })
      ]);

      return function cleanup() {
        handles.removeAll();
        handles.destroy();
      };
    }
  }, [layerListVM]);

  const renderItem = (item: __esri.ListItem) => {
    const value = (item as any).uid;
    const hasChildren = item.children?.length;
    const title = item.title;
    const updating = item.updating;
    const itemNode = hasChildren ? (
      [
        <div key={value} className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id={`${value}ItemSwitch`}
            checked={item.visible ? true : false}
            onChange={() => {
              item.visible = !item.visible;
            }}
          />
          <label className="form-check-label" htmlFor={`${value}ItemSwitch`}>
            {title}
            {updating ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : null}
          </label>
        </div>,
        item.visible
          ? item.children.map(child => (
              <div key={`${(child as any).uid}`} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`${(child as any).uid}childCheck`}
                  checked={child.visible ? true : false}
                  onChange={() => {
                    child.visible = !child.visible;
                  }}
                  disabled={!child.visibleAtCurrentScale ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor={`${(child as any).uid}childCheck`}
                >
                  {child.title}
                  {child.updating ? (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : null}
                </label>
              </div>
            ))
          : null
      ]
    ) : (
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id={`${value}ItemSwitch`}
          checked={item.visible ? true : false}
          onChange={() => {
            item.visible = !item.visible;
          }}
          disabled={!item.visibleAtCurrentScale ? true : false}
        />
        <label className="form-check-label" htmlFor={`${value}ItemSwitch`}>
          {title}
        </label>
      </div>
    );

    return <div key={value}>{itemNode}</div>;
  };
  return (
    <div className="layer-list">
      <div>{layerListVM?.operationalItems?.map(renderItem)}</div>
    </div>
  );
}

export default LayerList;
