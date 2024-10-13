function LineIcon({ width = "24", height = "24", className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
        >
            <path d="M7 11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" />
        </svg>
    )
}

export default LineIcon