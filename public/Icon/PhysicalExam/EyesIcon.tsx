import React from "react";

function EyesIcon({ color = "#003C83" }: any) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.75 12.5C21.75 14.75 17.385 19.25 12 19.25C6.615 19.25 2.25 14.75 2.25 12.5C2.25 10.25 6.615 5.75 12 5.75C17.385 5.75 21.75 10.25 21.75 12.5Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M15.75 12.5C15.75 13.4946 15.3549 14.4484 14.6517 15.1517C13.9484 15.8549 12.9946 16.25 12 16.25C11.0054 16.25 10.0516 15.8549 9.34835 15.1517C8.64509 14.4484 8.25 13.4946 8.25 12.5C8.25 11.5054 8.64509 10.5516 9.34835 9.84835C10.0516 9.14509 11.0054 8.75 12 8.75C12.9946 8.75 13.9484 9.14509 14.6517 9.84835C15.3549 10.5516 15.75 11.5054 15.75 12.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EyesIcon;
