const paths: Record<string, React.ReactNode> = {
  lab: (
    // flask
    <path d="M9 3h6M10 3v5.5L4.8 17.4A2 2 0 0 0 6.6 20h10.8a2 2 0 0 0 1.8-2.6L14 8.5V3M7.5 14h9" />
  ),
  onsite: (
    // toolbox / site case
    <path d="M3 9h18v10H3zM3 13h18M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M12 12v3" />
  ),
  pickup: (
    // delivery truck
    <path d="M1 5h13v11H1zM14 9h5l3 3v4h-8M5.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  ),
  repair: (
    // wrench
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" />
  ),
  process: (
    // gauge
    <path d="M12 20a8 8 0 1 1 8-8M12 12l4-4M12 20h.01M5 15h.01M19 15h.01" />
  ),
  staffing: (
    // people
    <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 5.8M18.2 14.4a6.5 6.5 0 0 1 3.3 5.6" />
  ),
};

export default function ServiceIcon({ name }: { name: keyof typeof paths | string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-500/10 text-accent-600"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </svg>
    </span>
  );
}
