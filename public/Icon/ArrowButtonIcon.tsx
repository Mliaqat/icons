import React from "react";

function ArrowButtonIcon() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1891_87562)">
        <path
          d="M20.1767 14.5732L20.1768 14.5732C20.2744 14.6709 20.2744 14.8291 20.1768 14.9268L20.1767 14.9268L15.9268 19.1767L15.9268 19.1768C15.8291 19.2744 15.6709 19.2744 15.5732 19.1768C15.4756 19.0791 15.4756 18.9209 15.5732 18.8232L18.5429 15.8535L19.3964 15H18.1893H10.75C10.6119 15 10.5 14.8881 10.5 14.75C10.5 14.6119 10.6119 14.5 10.75 14.5H18.1893H19.3964L18.5429 13.6464L15.5732 10.6768L15.2197 11.0303L15.5732 10.6768C15.4756 10.5791 15.4756 10.4208 15.5732 10.3232C15.6709 10.2256 15.8291 10.2256 15.9268 10.3232L20.1767 14.5732Z"
          fill="#191F4F"
          stroke="#191F4F"
          strokeWidth="2"
        />
        <rect
          x="3.5"
          y="3.5"
          width="23"
          height="23"
          rx="11.5"
          stroke="#191F4F"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1891_87562"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.615686 0 0 0 0 0.878431 0 0 0 0 0.772549 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1891_87562"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1891_87562"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default ArrowButtonIcon;
