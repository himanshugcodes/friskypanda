"use client";
import React, { useEffect } from "react";
const Instagram = () => {
  useEffect(() => {
    // Dynamically create a script tag
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;

    // Append the script tag to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/sonia_khare20/" data-instgrm-version="13" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:300px; padding:0; width:calc(100% - 2px); width:-webkit-calc(100% - 2px);">
              <div style="padding:16px;">
                <a href="https://www.instagram.com/sonia_khare20/" style="color:#ee5c36;target="_blank">A post shared by Instagram</a>
              </div>
            </blockquote>
          `,
      }}
    />
  );
};

export default Instagram;
