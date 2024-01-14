import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const InfoIcon = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span id="infoIcon" style={{ cursor: "pointer" }} onClick={toggleTooltip}>
        <img src="https://cdn-icons-png.flaticon.com/16/11086/11086161.png"></img>
      </span>

      <Tooltip target="infoIcon" isOpen={tooltipOpen} toggle={toggleTooltip}>
        Type City and then press Enter
      </Tooltip>
    </div>
  );
};

export default InfoIcon;
