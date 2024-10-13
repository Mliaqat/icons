import React from "react";

function ChangeSurfaceIcon({ active }: any) {
  return (
    <svg
      data-v-ae6c5bb8=""
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke={`${active ? "#000" : ""}`}
    >
      <path
        fill="currentColor"
        d="m21 9l-4-4v3h-7v2h7v3M7 11l-4 4l4 4v-3h7v-2H7v-3Z"
      ></path>
    </svg>
  );
}

export default ChangeSurfaceIcon;
