function AdmissionIcon({ width = "24", height = "24", className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
        >
            <path d="M23.707 16.325a1 1 0 0 0-1.414 0l-5.627 5.628-2.688-2.653a1 1 0 0 0-1.435 1.4l2.744 2.7a1.876 1.876 0 0 0 1.345.6h.033A1.873 1.873 0 0 0 18 23.447l5.707-5.708a1 1 0 0 0 0-1.414z" />
            <path d="M11.09 21.959A10 10 0 1 1 22 12c0 .307-.015.611-.041.911A1 1 0 0 0 22.866 14a.989.989 0 0 0 1.085-.907c.032-.363.049-.726.049-1.093a12 12 0 1 0-13.09 11.951h.091a1 1 0 0 0 .089-2z" />
            <path d="M11 7v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0z" />
        </svg>
    );
}

export default AdmissionIcon;