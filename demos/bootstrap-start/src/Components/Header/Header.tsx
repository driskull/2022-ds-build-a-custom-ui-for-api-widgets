import React from "react";
import "./Header.scss";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <header
      // STEP 5: Add row class
      className="header"
      // className="header row"
    >
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
