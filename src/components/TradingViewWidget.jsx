import React, { useRef, useEffect } from "react";
import "./tradingview-widget.css"; // Correct the import path

let tradingViewLoaded = false; // Flag to track if TradingView is already loaded

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    // Check if TradingView is already loaded
    if (!tradingViewLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "750",
          "autosize": true,
          "symbol": "${symbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "in",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

      // Append the script to the container
      container.current.appendChild(script);

      // Set the flag to true to indicate TradingView is loaded
      tradingViewLoaded = true;
    }
  }, []);

  return <div className="tradingview-widget-container" ref={container}></div>;
}

export default TradingViewWidget;
