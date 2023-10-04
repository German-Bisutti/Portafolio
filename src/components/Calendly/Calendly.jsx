import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/germanbisutti?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=183e70"
      style={{ minWidth: 620, height: 700 }}
    />
  );
};

export default Calendly;
