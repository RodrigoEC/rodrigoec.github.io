/* eslint-disable */
// components/HotjarAnalytics.tsx
"use client";

import { useEffect, useState } from "react";

interface HotjarAnalyticsProps {
  siteId: string;
  hotjarVersion?: number; // Usually 6
}

// Declare the Hotjar properties on the Window interface
// This extends the global Window object with Hotjar's specific properties.
declare global {
  interface Window {
    // Define hj as a function that can also have a 'q' property (an array of any arguments)
    hj: ((...args: any[]) => void) & { q?: any[] };
    _hjSettings: {
      hjid: string;
      hjsv: number;
    };
  }
}

const HotjarAnalytics: React.FC<HotjarAnalyticsProps> = ({ siteId, hotjarVersion = 6 }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Only initialize Hotjar in production to avoid unnecessary tracking in development
    if (siteId && !initialized) {
      (function (
        h: Window, // h is typically 'window'
        o: Document, // o is typically 'document'
        t: string, // t is the base URL for the Hotjar script
        j: string, // j is the file extension and query string part
        a: HTMLHeadElement | null, // a will be the <head> element (can be null)
        r: HTMLScriptElement // r will be the new <script> element
      ) {
        // Ensure h.hj exists and is callable.
        // The type assertion `as Window['hj']` helps TypeScript understand
        // that `h.hj` will conform to the extended type.
        h.hj = (h.hj || function (...args: any[]) {
            // Initialize h.hj.q if it doesn't exist
            if (!h.hj.q) {
                h.hj.q = [];
            }
            h.hj.q.push(args);
        }) as Window['hj'];


        h._hjSettings = { hjid: siteId, hjsv: hotjarVersion };

        a = o.getElementsByTagName("head")[0] as HTMLHeadElement;
        if (!a) { // Safety check: head might not be immediately available in some unusual cases
            console.error("Hotjar: Could not find document head element.");
            return;
        }

        r = o.createElement("script") as HTMLScriptElement;
        r.async = true;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;

        a.appendChild(r);
      })(
        window,
        document,
        "https://static.hotjar.com/c/hotjar-",
        ".js?sv=",
        document.getElementsByTagName("head")[0] as HTMLHeadElement, // Cast when passing
        document.createElement("script") as HTMLScriptElement // Cast when passing
      );


      setInitialized(true); // Mark as initialized
      console.log(`hey veio aí`)
    }
  }, [siteId, hotjarVersion, initialized]);

  return null; // This component doesn't render any visible UI
};

export default HotjarAnalytics;