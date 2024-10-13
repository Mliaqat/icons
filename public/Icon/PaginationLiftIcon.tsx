import React from "react";

function PaginationLiftIcon() {
  return (
    <svg
      id="fi_3840764"
      height="35"
      viewBox="0 0 512 512"
      width="35"
      data-name="Layer 1"
      className="ease-in duration-200"
    >
      <linearGradient
        id="Blue_2"
        gradientUnits="userSpaceOnUse"
        x1="6"
        x2="506"
        y1="256"
        y2="256"
      >
        <stop offset="0" stop-color="#2bc4f3"></stop>
        <stop offset=".5" stop-color="#00aeee"></stop>
        <stop offset="1" stop-color="#0095da"></stop>
      </linearGradient>
      <linearGradient
        id="linear-gradient"
        gradientUnits="userSpaceOnUse"
        x1="109.602"
        x2="405.694"
        y1="163.745"
        y2="459.837"
      >
        <stop offset="0"></stop>
        <stop offset="1" stop-opacity="0"></stop>
      </linearGradient>
      <circle cx="256" cy="256" fill="url(#Blue_2)" r="250"></circle>
      <path
        d="m485.54 355.172-123.121-123.12-212.838-108.286v63.813l90.7 90.7-90.7 46.144v63.813l117.508 117.506c98.061-4.282 181.449-65.042 218.451-150.57z"
        fill="url(#linear-gradient)"
        opacity=".49"
      ></path>
      <path
        d="m284.064 256-134.483-68.421v-63.813l212.838 108.286v47.896l-212.838 108.286v-63.813z"
        fill="#fff"
      ></path>
    </svg>
  );
}

export default PaginationLiftIcon;
