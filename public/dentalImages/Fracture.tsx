import React from "react";

function Fracture() {
  const pathStyle: React.CSSProperties = {
    strokeWidth: 6.56659,
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const path1Style = {
    strokeWidth: 7.16995548,
  };

  return (
    <svg width="210mm" height="210mm" viewBox="0 0 210 210">
      <g style={pathStyle}>
        <path
          d="m180.7115 57.242435-22.34 163.000005m-85.88765-109.21 151.02001.04"
          style={path1Style}
          transform="matrix(.69735 0 0 .69735 4.3040337 8.2473507)"
        />
        <path
          d="m65.290378 166.33897 151.020012.04"
          style={path1Style}
          transform="matrix(.69735 0 0 .69735 4.3040337 8.2473507)"
        />
        <path
          d="M127.25212 57.242435 116.11238 135.0726l-13.7079 85.16984"
          style={path1Style}
          transform="matrix(.69735 0 0 .69735 4.3040337 8.2473507)"
        />
      </g>
    </svg>
  );
}

export default Fracture;
