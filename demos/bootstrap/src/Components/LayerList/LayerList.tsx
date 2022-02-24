import React from "react";
import "./LayerList.scss";
import { useLayerListViewModel } from "./hooks";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const layerListVM = useLayerListViewModel(props);

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
