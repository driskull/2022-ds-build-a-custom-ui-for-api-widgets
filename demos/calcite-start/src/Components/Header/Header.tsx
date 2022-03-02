import React from "react";
import "./Header.scss";

interface HeaderProps {
  title: string;
}
// STEP 1: UPDATE RETURN RENDERING VNODE
// function Header(props: HeaderProps) {
//   return (
//     <header slot="header">
//       <h1>{props.title}</h1>
//     </header>
//   );
// }

function Header(props: HeaderProps) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
