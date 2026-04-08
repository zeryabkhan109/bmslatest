"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    HubSpotMeetings?: {
      load: () => void;
    };
  }
}

export default function MeetingEmbed() {
  useEffect(() => {
    if (window.HubSpotMeetings) {
      window.HubSpotMeetings.load();
    }
  }, []);

  return (
    <>
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.HubSpotMeetings) {
            window.HubSpotMeetings.load();
          }
        }}
      />

      <div
        className="meetings-iframe-container"
        style={{ width: "100%", height: "100%", padding: "0", margin: "0" }}
        data-src="https://meetings-eu1.hubspot.com/sophie-schouten/kennenlerngesprach-qr-code?embed=true"
      />
    </>
  );
}
