function DoNotEnterIcon({ width = "24", height = "24", className = "" }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
        >
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm5-13H7c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2ZM7 13v-2h10v2H7Z" />
        </svg>
    )
}

export default DoNotEnterIcon