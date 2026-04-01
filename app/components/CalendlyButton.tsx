"use client";

import { JSX } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/elise-elisebuilds/30min";

export function CalendlyButton(): JSX.Element {
  const handleClick = (): void => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }

    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cta-primary"
      style={{ cursor: "pointer" }}
    >
      Schedule 30 minutes with me
    </button>
  );
}
