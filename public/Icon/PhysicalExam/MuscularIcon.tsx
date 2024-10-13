import React from "react";

function MuscularIcon({ color = "#003C83" }: any) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.685 18.5C11.41 15.875 13.945 14 16.865 14.31C19.645 14.605 21.855 16.95 21.995 19.74C22.03 20.475 21.93 21.18 21.715 21.835C21.585 22.235 21.195 22.5 20.77 22.5H5.87896C3.35496 22.5 1.46196 20.1905 1.95696 17.7155L4.99996 2.5H11L13 6L8.71496 9.065L7.49996 7.5M8.71996 9.065L11 17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MuscularIcon;
