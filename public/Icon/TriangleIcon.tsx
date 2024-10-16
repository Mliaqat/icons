function TriangleIcon({ width = "24", height = "24", className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
        >
            <path d="M6.414 15.586h11.172a1 1 0 0 0 .707-1.707l-5.586-5.586a1 1 0 0 0-1.414 0l-5.586 5.586a1 1 0 0 0 .707 1.707Z" />
        </svg>
    )
}

export default TriangleIcon