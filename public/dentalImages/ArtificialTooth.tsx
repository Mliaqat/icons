import React from 'react'

function ArtificialTooth() {
  const commonStyle = {
    fill: "none",
    stroke: "#000",
    strokeOpacity: 1,
    strokeDasharray: "none",
  };

  const path1Style = {
    ...commonStyle,
    strokeWidth: 3,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
  };

  const path2Style = {
    ...commonStyle,
    strokeWidth: 6,
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    strokeMiterlimit: 4,
  };

  const path3Style = {
    ...commonStyle,
    strokeWidth: 6,
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    strokeMiterlimit: 4,
  };

  const path4Style = {
    ...commonStyle,
    strokeWidth: 6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
  };

  return (
    <svg
      width="210mm"
      height="210mm"
      viewBox="0 0 210 210"
    >
      <path
        style={path1Style as React.CSSProperties}
        d="M.0147505 105H209.98525"
      />
      <path
        style={path2Style as React.CSSProperties}
        d="M59.628902 162.72231 103.63031 46.083638"
      />
      <path
        style={path3Style as React.CSSProperties}
        d="m147.63171 162.72231-44.0014-116.638672"
      />
      <path
        style={path4Style as React.CSSProperties}
        d="M88.730359 87.0585H119.2287"
      />
    </svg>
  );
}

export default ArtificialTooth
