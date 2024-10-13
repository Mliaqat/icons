import React from "react";

function Missing() {
  const svgStyle = {};

  return (
    <svg width="210mm" height="210mm" viewBox="0 0 210 210" className="z-10">
      <path
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 30,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M.01474959 105H209.98525"
      />
    </svg>
  );
}

export default Missing;
