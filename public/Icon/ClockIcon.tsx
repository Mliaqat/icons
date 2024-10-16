import React from 'react'

function ClockIcon({ width = "24", height = "24", className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
        >
            <path className={className} d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
            <path className={className} d="M12 6a1 1 0 0 0-1 1v4.325l-3.371 2.112a1 1 0 0 0 1.062 1.7l3.84-2.4a1 1 0 0 0 .469-.858V7a1 1 0 0 0-1-1Z" />
        </svg>
    )
}

export default ClockIcon