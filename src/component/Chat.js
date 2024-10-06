"use client";
import React from "react";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // Tawk.to Script
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://embed.tawk.to/2e68e588dd3bebc2f153978d5fcc4cd22dd29308/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <Component {...pageProps} />;
};

export default Chat;
