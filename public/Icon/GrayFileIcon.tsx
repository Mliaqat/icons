import React from "react";

function GrayFileIcon({ width = "15", height = "18" }: any) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 28" fill="none">
      <path
        d="M1.75 16.5V11.5C1.75 6.78625 1.75 4.42875 3.215 2.965C4.67875 1.5 7.03625 1.5 11.75 1.5H14.25C18.9637 1.5 21.3212 1.5 22.785 2.965C23.6025 3.78125 23.9638 4.875 24.1225 6.5M24.25 11.5V16.5C24.25 21.2137 24.25 23.5712 22.785 25.035C21.3212 26.5 18.9637 26.5 14.25 26.5H11.75C7.03625 26.5 4.67875 26.5 3.215 25.035C2.3975 24.2187 2.03625 23.125 1.8775 21.5M8 16.5H14.25M8 11.5H9.25M18 11.5H13"
        stroke="#717171"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default GrayFileIcon;
