import React from 'react'

function DoctorReportIcon({color}:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="80"
      height="80"
      x={0}
      y={0}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <circle r={16} cx={16} cy={16} fill="#ffffff" />
      <g transform="matrix(0.7,0,0,0.7,4.800000000000001,4.800000000000001)">
        <g data-name="Layer 2">
          <circle
            cx={21}
            cy={10}
            r={1.25}
            fill={color}
            opacity={1}
            data-original="#000000"
          />
          <path
            d="M26 2.25H6A1.752 1.752 0 0 0 4.25 4v24A1.752 1.752 0 0 0 6 29.75h20A1.752 1.752 0 0 0 27.75 28V4A1.752 1.752 0 0 0 26 2.25Zm-3 24.5H9a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5Zm0-4H9a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5Zm-1.25-10.117V16A2.753 2.753 0 0 1 19 18.75h-4.5A2.753 2.753 0 0 1 11.75 16v-1.25H10.5A2.753 2.753 0 0 1 7.75 12V8A1.752 1.752 0 0 1 9.5 6.25h.75V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25H9.5a.25.25 0 0 0-.25.25v4a1.251 1.251 0 0 0 1.25 1.25h4A1.251 1.251 0 0 0 15.75 12V8a.25.25 0 0 0-.25-.25h-.75V8a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 1.5 0v.25h.75A1.752 1.752 0 0 1 17.25 8v4a2.753 2.753 0 0 1-2.75 2.75h-1.25V16a1.251 1.251 0 0 0 1.25 1.25H19A1.251 1.251 0 0 0 20.25 16v-3.367a2.75 2.75 0 1 1 1.5 0Z"
            fill={color}
            opacity={1}
            data-original="#000000"
          />
        </g>
      </g>
    </svg>
  );
}

export default DoctorReportIcon