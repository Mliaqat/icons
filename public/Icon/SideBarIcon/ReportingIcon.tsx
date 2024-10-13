import React from 'react'

function ReportingIcon({color}:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="30"
      height="30"
    >
      <g >
        <path fill={color} d="M28,9.03V27H45.97A19.017,19.017,0,0,0,28,9.03Z"></path>
        <path fill={color} d="M41.97,33H23.41L10.31,46.1A18.963,18.963,0,0,0,41.97,33Z"></path>
        <path fill={color} d="M22,13.03A18.963,18.963,0,0,0,8.9,44.69L22,31.59Z"></path>
        <path fill={color} d="M52,13h6.59L51,5.41V12A1,1,0,0,0,52,13Z"></path>
        <path fill={color} d="M49,42a7,7,0,1,0,7,7A7.008,7.008,0,0,0,49,42ZM47.707,52.707a1,1,0,0,1-1.414,0l-3-3,1.414-1.414L47,50.586l5.293-5.293,1.414,1.414Z"></path>
        <path fill={color} d="M52,15a3.009,3.009,0,0,1-3-3V4H25a1,1,0,0,0-1,1V31H43a1,1,0,0,1,1,1A21.014,21.014,0,0,1,24,52.95V59a1,1,0,0,0,1,1H59a1,1,0,0,0,1-1V15ZM27,29a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1A21.023,21.023,0,0,1,48,28a1,1,0,0,1-1,1ZM49,58a9,9,0,1,1,9-9A9.014,9.014,0,0,1,49,58Zm9-25H50V31h8Zm0-6H50V25h8Zm0-6H50V19h8Z"></path>
      </g>
    </svg>
  );
}

export default ReportingIcon