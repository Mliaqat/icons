function MoreSideBarIcon({width="24", height="24", className="", color}:any) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width={width}
            height={height}
            className={className}
            fill={color}
        >
            <path fill={color} d="M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Zm11-7h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Zm11-7h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Z" />
        </svg>
    )
}

export default MoreSideBarIcon;