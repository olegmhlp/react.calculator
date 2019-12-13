import React from "react";
import "./Button.css";

export const Button = ({value, label, onClick, ...props }) => (
  <div className="buttonComponent">
    <button className={props.className} onClick={onClick(value)} value={value}>
      {label}
    </button>
  </div>
);
