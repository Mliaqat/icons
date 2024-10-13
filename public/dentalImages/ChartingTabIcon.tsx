function ChartingTabIcon({ active, width = "1.8em", height = "1.8em" }: any) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#dce2f9"
    >
      {active === "chart" ? (
        <path
          fill="currentColor"
          d="M3 7V5h2V4a2 2 0 0 1 2-2h6v7l2.5-1.5L18 9V2h1c1.05 0 2 .95 2 2v16c0 1.05-.95 2-2 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7H3m4 4H5v2h2v-2m0-4V5H5v2h2m0 12v-2H5v2h2Z"
        ></path>
      ) : (
        <path
          fill="currentColor"
          d="M17 4v6l-2-2l-2 2V4H9v16h10V4h-2M3 7V5h2V4a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v16c0 1.05-.95 2-2 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7H3m2-2v2h2V5H5m0 14h2v-2H5v2m0-6h2v-2H5v2Z"
        ></path>
      )}
    </svg>
  );
}

export default ChartingTabIcon;
