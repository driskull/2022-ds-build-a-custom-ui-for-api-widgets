import React from "react";
import "./Header.scss";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  // STEP 3
  return (
    // <header className="header row">
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
