import React from "react";

function DocIcon({ width = 20, height = 24 }: any) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 15V7C1 4.172 1 2.757 1.879 1.879C2.757 1 4.172 1 7 1H11.172C11.58 1 11.785 1 11.969 1.076C12.152 1.152 12.297 1.296 12.586 1.586L16.414 5.414C16.704 5.704 16.848 5.848 16.924 6.032C17 6.215 17 6.42 17 6.828V15C17 17.828 17 19.243 16.121 20.121C15.243 21 13.828 21 11 21H7C4.172 21 2.757 21 1.879 20.121C1 19.243 1 17.828 1 15ZM5 10H13H5ZM5 13H13H5ZM5 16H9.17H5Z"
        fill="#4285F4"
      />
      <path
        d="M5 10H13M5 13H13M5 16H9.17M1 15V7C1 4.172 1 2.757 1.879 1.879C2.757 1 4.172 1 7 1H11.172C11.58 1 11.785 1 11.969 1.076C12.152 1.152 12.297 1.296 12.586 1.586L16.414 5.414C16.704 5.704 16.848 5.848 16.924 6.032C17 6.215 17 6.42 17 6.828V15C17 17.828 17 19.243 16.121 20.121C15.243 21 13.828 21 11 21H7C4.172 21 2.757 21 1.879 20.121C1 19.243 1 17.828 1 15Z"
        stroke="#85B6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DocIcon;
