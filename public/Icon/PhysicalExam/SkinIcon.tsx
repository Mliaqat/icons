import React from "react";

function SkinIcon({ color = "#003c83" }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8.5C4.5 8.5 4.5 10.5 6 10.5L8.00052 10.5C8.5528 10.5 9 10.9445 9 11.4968V21C9 22.5 11 22.5 11 21C11 19.5 11 16.5 12 16.5C13 16.5 13 19.5 13 21C13 22.5 15 22.5 15 21V11.5C15 10.9477 15.4477 10.5 16 10.5H18C19.5 10.5 19.5 8.5 18 8.5H6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default SkinIcon;
