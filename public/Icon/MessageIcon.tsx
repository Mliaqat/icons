import React from "react";

function MessageIcon({ color }: any) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8 0H7.2C3.2292 0 0 3.2292 0 7.2V22.8C0 23.1183 0.126428 23.4235 0.351472 23.6485C0.576515 23.8736 0.88174 24 1.2 24H16.8C20.7708 24 24 20.7708 24 16.8V7.2C24 3.2292 20.7708 0 16.8 0ZM21.6 16.8C21.6 19.4472 19.4472 21.6 16.8 21.6H2.4V7.2C2.4 4.5528 4.5528 2.4 7.2 2.4H16.8C19.4472 2.4 21.6 4.5528 21.6 7.2V16.8Z"
        fill={color}
      />
      <path
        d="M7.38281 10.1538H14.7674"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.38281 13.8462H11.9982"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MessageIcon;
