import React from "react";

function PPCTabIcon({ active }: any) {
  return (
    <svg
      data-v-35c176b9=""
      aria-hidden="true"
      role="img"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
    >
      {active === "6ppc" ? (
        <path
          fill="currentColor"
          d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3"
        ></path>
      ) : (
        <path
          fill="currentColor"
          d="M3 11h8V3H3m2 2h4v4H5m8 12h8v-8h-8m2 2h4v4h-4M3 21h8v-8H3m2 2h4v4H5m8-16v8h8V3m-2 6h-4V5h4Z"
        ></path>
      )}
    </svg>
  );
}

export default PPCTabIcon;
