import React from "react";

function CalanderIcon({ type = 1, width = "24", height = "24", className = "" }) {
  if (type === 2) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={className}
      >
        <path d="M19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm14 18H5c-1.654 0-3-1.346-3-3v-9h20v9c0 1.654-1.346 3-3 3Zm0-8a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Zm-7 4a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1Z" />
      </svg>
    );
  } else {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.42857 1V7.2069M13.5714 1V7.2069M3.85714 10.3103H7.28571M14.1429 10.3103H10.7143M3.85714 14.0345H7.28571M10.7143 14.0345H14.1429M2.14286 4.10345H15.8571C16.1602 4.10345 16.4509 4.23424 16.6653 4.46704C16.8796 4.69984 17 5.01559 17 5.34483V17.7586C17 18.0879 16.8796 18.4036 16.6653 18.6364C16.4509 18.8692 16.1602 19 15.8571 19H2.14286C1.83975 19 1.54906 18.8692 1.33474 18.6364C1.12041 18.4036 1 18.0879 1 17.7586V5.34483C1 5.01559 1.12041 4.69984 1.33474 4.46704C1.54906 4.23424 1.83975 4.10345 2.14286 4.10345Z"
          stroke="#191F4F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );

  }
}

export default CalanderIcon;
