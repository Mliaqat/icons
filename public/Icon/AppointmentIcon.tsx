import React from "react";

function AppointmentIcon({ color }: any) {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9226 24.9998C20.7265 24.9998 22.9995 22.7268 22.9995 19.9229C22.9995 17.119 20.7265 14.8459 17.9226 14.8459C15.1187 14.8459 12.8457 17.119 12.8457 19.9229C12.8457 22.7268 15.1187 24.9998 17.9226 24.9998Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M17.3584 18.2307V20.4871H19.6148"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4969 14.3334C13.2929 14.3334 11.5219 14.3334 10.4969 14.3334ZM10.4969 14.3334C11.4361 14.3333 11.5131 14.3334 10.4969 14.3334ZM10.4969 14.3334L4.83155 14.3333C3.81536 14.3333 2.84079 14.7547 2.12224 15.5048C1.40368 16.255 1 17.2724 1 18.3332V20.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.72741 9.72727C12.1374 9.72727 14.091 7.77361 14.091 5.36364C14.091 2.95367 12.1374 1 9.72741 1C7.31744 1 5.36377 2.95367 5.36377 5.36364C5.36377 7.77361 7.31744 9.72727 9.72741 9.72727Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AppointmentIcon;
