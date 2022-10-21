import React from "react";
import "./sidebarButton.css";

function SidebarButton({ text, Icon, active }) {
  return (
    <div className={`sidebarButton  ${active && "sidebarButton--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarButton;
