import React from "react";

function PaginationRightIcon() {
  return (
    <svg
      id="fi_3840763"
      height="35"
      viewBox="0 0 512 512"
      width="35"
      data-name="Layer 1"
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
        x1="217.888"
        x2="459.837"
        y1="163.745"
        y2="405.694"
      >
        <stop offset="0"></stop>
        <stop offset="1" stop-opacity="0"></stop>
      </linearGradient>
      <circle cx="256" cy="256" fill="url(#Blue_2)" r="250"></circle>
      <path
        d="m505.742 267.089-143.323-143.323-212.838 108.286v47.9l205.591 205.587c85.528-37.001 146.288-120.39 150.57-218.45z"
        fill="url(#linear-gradient)"
        opacity=".49"
      ></path>
      <path
        d="m227.936 256 134.483-68.421v-63.813l-212.838 108.286v47.896l212.838 108.286v-63.813z"
        fill="#fff"
      ></path>
    </svg>
  );
}

export default PaginationRightIcon;
