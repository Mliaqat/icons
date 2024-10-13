import React from "react";

function PerAuthIcon({ color }: any) {
  return (
    <svg version="1.1" width="26" height="26" x="0" y="0" viewBox="0 0 64 64">
      <g>
        <path
          d="M12 59a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4 4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v50a4 4 0 0 0 4 4zm40-4V7a2 2 0 0 1 2 2v50a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2h34a4 4 0 0 0 4-4zM10 5a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v50a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"
          fill={color}
          opacity="1"
          data-original={color}
        />
        <path
          d="M20 42v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-2-2.816V35a8 8 0 0 0-16 0v4.184A3 3 0 0 0 20 42zm10-13a6.006 6.006 0 0 1 6 6v4h-2v-4a4 4 0 0 0-8 0v4h-2v-4a6.006 6.006 0 0 1 6-6zm2 10h-4v-4a2 2 0 0 1 4 0zm-10 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1z"
          fill={color}
          opacity="1"
          data-original={color}
        />
        <path
          d="M30 49a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM13 13h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm1-4h4v2h-4zM22 7h17v2H22zM22 11h22v2H22zM46 11h2v2h-2zM13 23h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm1-4h4v2h-4zM22 17h17v2H22zM22 21h22v2H22zM46 21h2v2h-2z"
          fill={color}
          opacity="1"
          data-original={color}
        />
      </g>
    </svg>
  );
}

export default PerAuthIcon;
