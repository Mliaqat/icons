import React from "react";

function ConstitutionalDiseaseIcon({ color = "#003C83" }: any) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 10C3.5 7.17157 3.5 5.75736 4.37868 4.87868C5.25736 4 6.67157 4 9.5 4H14.5C17.3284 4 18.7426 4 19.6213 4.87868C20.5 5.75736 20.5 7.17157 20.5 10V15C20.5 17.8284 20.5 19.2426 19.6213 20.1213C18.7426 21 17.3284 21 14.5 21H9.5C6.67157 21 5.25736 21 4.37868 20.1213C3.5 19.2426 3.5 17.8284 3.5 15V10Z"
        stroke={color}
      />
      <path
        d="M16.5 10.5C16.5 13.0794 15.5 11.5 12 11.5C8.5 11.5 7.5 13.0794 7.5 10.5C7.5 8.29086 9.79086 6.5 12 6.5C14.2091 6.5 16.5 8.29086 16.5 10.5Z"
        stroke={color}
      />
      <path
        d="M12 6.5V7.5M14 7.5L13.5 8M15.5 8.5L15 9M16 10.5H15.5M10 7.5L10.5 8M8.5 8.5L9 9M8 10.5H8.5"
        stroke={color}
        strokeLinecap="round"
      />
      <path d="M12 9V11.5" stroke={color} strokeLinecap="round" />
      <path
        d="M18.5 17C18.5 18.5 18 19 17 19"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ConstitutionalDiseaseIcon;
