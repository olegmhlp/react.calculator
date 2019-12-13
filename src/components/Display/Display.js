import React from "react";
import "./Display.css";

export const Display = ({ current }) => (
  <div className="display">
    <p id="displayText">{current}</p>
  </div>
);
