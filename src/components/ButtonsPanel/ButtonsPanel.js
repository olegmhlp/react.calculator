import React from "react";
import { Button } from "../Button/Button";
import { buttonsList } from "./buttonsList";
import "./ButtonsPanel.css";

export const ButtonsPanel = ({ onClick }) => (
  <div className="buttonsPanel">
    {buttonsList.map(btnType => (
      <Button
        key={btnType.value}
        className={btnType.className}
        label={btnType.value}
        value={btnType.value}
        onClick={() => onClick}
      ></Button>
    ))}
  </div>
);
