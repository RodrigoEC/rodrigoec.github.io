// components/HotjarAnalytics.tsx
"use client";

import { useEffect, useState } from "react";

interface HotjarAnalyticsProps {
  siteId: string;
  hotjarVersion?: number; // Usually 6
}

const HotjarAnalytics: React.FC<HotjarAnalyticsProps> = ({ siteId, hotjarVersion = 6 }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Only initialize Hotjar in production to avoid unnecessary tracking in development
    if (siteId && !initialized) {
      (function(h,o,t,j,a,r){
        // eslint-disable-next-line prefer-rest-params
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:siteId,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      setInitialized(true); // Mark as initialized
      console.log(`hey veio aí`)
    }
  }, [siteId, hotjarVersion, initialized]);

  return null; // This component doesn't render any visible UI
};

export default HotjarAnalytics;