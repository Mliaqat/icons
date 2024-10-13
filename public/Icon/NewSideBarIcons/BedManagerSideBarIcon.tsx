function BedManagerSideBarIcon({ width = "24", height = "24", className = "", color }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            fill={color}
        >
            <path fill={color} d="M20.249 8.157a1.006 1.006 0 0 0-1.218.72c-.138.534.185 1.08.72 1.218A2.997 2.997 0 0 1 22 13v2H10v-2c0-1.654 1.346-3 3-3a1 1 0 1 0 0-2 5.005 5.005 0 0 0-4.428 2.681A3.478 3.478 0 0 0 6.5 10a3.504 3.504 0 0 0-3.162 5H2V5a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-2h20v2a1 1 0 1 0 2 0V13a5 5 0 0 0-3.751-4.843ZM5 13.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S7.327 15 6.5 15 5 14.327 5 13.5ZM2 19v-2h20v2H2ZM7 4a1 1 0 0 1 1-1h3.965L13.668.445a1.003 1.003 0 0 1 1.755.17l1.865 4.477 1.443-1.732a1 1 0 0 1 .769-.359H23a1 1 0 1 1 0 2h-3.031l-2.2 2.641a1.003 1.003 0 0 1-.918.348 1 1 0 0 1-.773-.604l-1.781-4.275-.964 1.445a1.001 1.001 0 0 1-.832.445h-4.5a1 1 0 0 1-1-1Z" />
        </svg>
    )
}

export default BedManagerSideBarIcon;