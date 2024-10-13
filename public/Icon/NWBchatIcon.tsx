function NWBchatIcon({width="24", height="24", className=""}) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width={width}
            height={height}
            className={className}
        >
            <path d="M18 1H6C3.243 1 1 3.243 1 6v8a5.01 5.01 0 0 0 4 4.899V22a1 1 0 0 0 1.555.832L12.303 19H18c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5zm-6.555 16.168L7 20.131V18a1 1 0 0 0-1-1c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3h-6a.951.951 0 0 0-.555.168z" />
            <path d="M18 7H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zm-2 4H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
        </svg>
    )
}

export default NWBchatIcon;