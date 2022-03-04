import React from "react";
import "./LayerList.scss";
import { useLayerListViewModel } from "./hooks";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const layerListVM = useLayerListViewModel(props);

  // const renderItem = (item: __esri.ListItem, itemIndex: number) => {
  //   const value = (item as any).uid;
  //   const hasChildren = item.children?.length;
  //   const title = item.title;
  //   const updating = item.updating;
  //   const itemNode = hasChildren ? (
  //     [
  //       <div key={`${value}-form-check`} className="parent-item">
  //         <div>
  //           <input
  //             type="checkbox"
  //             id={`${value}ItemSwitch`}
  //             checked={item.visible ? true : false}
  //             onChange={() => (item.visible = !item.visible)}
  //           />
  //           <label htmlFor={`${value}ItemSwitch`}>
  //             <span>{title}</span>

  //             {updating ? "Loading..." : null}
  //           </label>
  //         </div>
  //       </div>,
  //       <ul key={`${value}-list-parent`} id={`listGroup${itemIndex}`}>
  //         {item.children.map(child => (
  //           <li key={`${(child as any).uid}`}>
  //             <div>
  //               <input
  //                 type="checkbox"
  //                 id={`${(child as any).uid}ChildCheck`}
  //                 checked={child.visible ? true : false}
  //                 onChange={() => (child.visible = !child.visible)}
  //               />
  //               <label htmlFor={`${(child as any).uid}ChildCheck`}>
  //                 <span>{child.title}</span>

  //                 {child.updating ? "Loading..." : null}
  //               </label>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     ]
  //   ) : (
  //     <div>
  //       <input
  //         type="checkbox"
  //         id={`${value}ItemSwitch`}
  //         checked={item.visible ? true : false}
  //         onChange={() => (item.visible = !item.visible)}
  //       />
  //       <label htmlFor={`${value}ItemSwitch`}>{title}</label>
  //     </div>
  //   );

  //   return <li key={`${value}-list-item`}>{itemNode}</li>;
  // };
  return (
    <div className="layer-list">
      {/* <ul>{layerListVM?.operationalItems?.map(renderItem)}</ul> */}
    </div>
  );
}

export default LayerList;
