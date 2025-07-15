"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    $sleek?: [];
    SLEEK_PRODUCT_ID: string;
  }
}

export default function SleekplanWidget() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$sleek=[];
      window.SLEEK_PRODUCT_ID="323014614";
      (function(){
        const d=document;
        const s=d.createElement("script");
        s.src="https://client.sleekplan.com/sdk/e.js";
        s.async=true;
      d.getElementsByTagName("head")[0].appendChild(s);}())
    }
  }, []);

  return null;
}