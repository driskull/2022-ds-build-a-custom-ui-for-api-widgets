import React from "react";
import "./LayerList.scss";
import { useLayerListViewModel } from "./hooks";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const layerListVM = useLayerListViewModel(props);

  // STEP 8
  // const rightCaretIcon = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="16"
  //     height="16"
  //     fill="currentColor"
  //     className="bi bi-caret-right-fill"
  //     viewBox="0 0 16 16"
  //   >
  //     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
  //   </svg>
  // );

  // const downCaretIcon = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="16"
  //     height="16"
  //     fill="currentColor"
  //     className="bi bi-caret-down-fill"
  //     viewBox="0 0 16 16"
  //   >
  //     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
  //   </svg>
  // );

  // STEP 9
  // const loader = (
  //   <div className="spinner-border text-primary" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // );

  const renderItem = (item: __esri.ListItem, itemIndex: number) => {
    const value = (item as any).uid;
    const hasChildren = item.children?.length;
    const title = item.title;
    const updating = item.updating;
    const itemNode = hasChildren ? (
      [
        <div key={`${value}-form-check`} className="parent-item">
          {/* STEP 10 */}
          {/* <button onClick={() => (item.open = !item.open)}>
            {item.open ? downCaretIcon : rightCaretIcon}
          </button> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id={`${value}ItemSwitch`}
              checked={item.visible ? true : false}
              onChange={() => (item.visible = !item.visible)}
            />
            <label className="form-check-label" htmlFor={`${value}ItemSwitch`}>
              <span>{title}</span>
              {/* STEP 11 */}
              {/* {updating ? loader : null} */}
              {updating ? "Loading..." : null}
            </label>
          </div>
        </div>,
        <ul
          key={`${value}-list-parent`}
          className={`list-group list-group-flush${
            !item.open ? " collapse" : ""
          }`}
          id={`listGroup${itemIndex}`}
        >
          {item.children.map(child => (
            <li
              key={`${(child as any).uid}`}
              className={`list-group-item${
                !child.visibleAtCurrentScale ? " disabled" : ""
              }`}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`${(child as any).uid}ChildCheck`}
                  checked={child.visible ? true : false}
                  onChange={() => (child.visible = !child.visible)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`${(child as any).uid}ChildCheck`}
                >
                  <span>{child.title}</span>
                  {/* STEP 11 */}
                  {/* {updating ? loader : null} */}
                  {child.updating ? "Loading..." : null}
                </label>
              </div>
            </li>
          ))}
        </ul>
      ]
    ) : (
      // Step 12
      <div>
        {/* <div className="form-check form-switch"> */}
        <input
          // STEP 13
          // className="form-check-input"
          type="checkbox"
          id={`${value}ItemSwitch`}
          checked={item.visible ? true : false}
          onChange={() => (item.visible = !item.visible)}
        />
        <label htmlFor={`${value}ItemSwitch`}>
          {/* STEP 14 */}
          {/* <label className="form-check-label" htmlFor={`${value}ItemSwitch`}> */}
          {title}
        </label>
      </div>
    );

    return (
      <li
        key={`${value}-list-item`}
        // STEP 15
        // className={`list-group-item${
        //   !item.visibleAtCurrentScale ? " disabled" : ""
        // }`}
      >
        {itemNode}
      </li>
    );
  };
  return (
    <div className="layer-list">
      <ul className="list-group list-group-flush">
        {layerListVM?.operationalItems?.map(renderItem)}
      </ul>
    </div>
  );
}

export default LayerList;
