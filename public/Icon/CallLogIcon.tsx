import React from "react";

function CallLogIcon({ color }: any) {
  return (
    <svg width={25} height={25} viewBox="0 0 32 33" fill="none">
      <path
        d="M5.3335 16.6777H5.34683M5.3335 8.67773H5.34683M5.3335 24.6777H5.34683M10.6668 24.6777H13.3335M10.6668 16.6777H13.3335M10.6668 8.67773H13.3335M18.6668 8.67773H26.6668M18.6668 16.6777H26.6668M18.6668 24.6777H26.6668"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CallLogIcon;
