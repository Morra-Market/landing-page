type IconName =
  | "arrow-up-right"
  | "check"
  | "clock"
  | "fabric"
  | "map-pin"
  | "message"
  | "perfume"
  | "route"
  | "spark"
  | "wallet"
  | "whatsapp"
  | "x";

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function MorraIcon({ name, className, size = 24, strokeWidth = 1.7 }: IconProps) {
  const common = {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3.2 2" />
        </svg>
      );
    case "fabric":
      return (
        <svg {...common}>
          <path d="M3 7c3-2 5-2 6 0s3 2 6 0 5-2 6 0" />
          <path d="M3 12c3-2 5-2 6 0s3 2 6 0 5-2 6 0" />
          <path d="M3 17c3-2 5-2 6 0s3 2 6 0 5-2 6 0" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M19 10.2c0 5-7 10.2-7 10.2S5 15.2 5 10.2a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "message":
      return (
        <svg {...common}>
          <path d="M19.5 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.2-.6L4 20l1.6-3.5A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 7.5 7.5Z" />
          <path d="M8.5 11.5h.1M12 11.5h.1M15.5 11.5h.1" strokeWidth="2.4" />
        </svg>
      );
    case "perfume":
      return (
        <svg {...common}>
          <path d="M9 8h6l1 2v9H8v-9l1-2Z" />
          <path d="M10 8V5h4v3M13 5V3h2" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <path d="M5 5h.01M19 19h.01" strokeWidth="3" />
          <path d="M6 5h3.2c2.3 0 2.8 2.7 4.7 2.7H17A2 2 0 0 1 19 9.7v1.1a2 2 0 0 1-2 2h-2.2c-2.1 0-2.8 2.2-4.5 2.2H7a2 2 0 0 0-2 2V19" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
          <path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" />
          <path d="M4 8h13.5a2.5 2.5 0 0 1 0 5H16" />
          <path d="M17 10.5h.01" strokeWidth="2.6" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.1.1.3 0 .5-.4.8-.9 1-.6 1.5.9 1.5 1.8 2 3.1 2.7.2.1.4.1.5-.1.2-.2.6-.7.8-.9.1-.2.3-.2.5-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3.1.1.1.6-.1 1.3Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
  }
}
