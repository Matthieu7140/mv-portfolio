import React, { useEffect, useState } from "react";
import "./LoadAnimation.css";

export default function LoadAnimation() {
  const [loaded, setLoaded] = useState(false);

  const onPageLoad = () => {
    setLoaded(true);
  };

  const editClassName = (element: HTMLElement, className: string) => {
    if (element) {
      element.className = className;
    }
  };

  useEffect(() => {
    if (loaded) {
      const loading = document.getElementById("loading");
      const loadingCenter = document.getElementById("loading-center");
      const block1 = document.getElementById("block-1");

      const loadingTimeout = setTimeout(
        editClassName,
        3800,
        loading,
        "slideDown"
      );
      const loadingCenterTimeout = setTimeout(
        editClassName,
        3200,
        loadingCenter,
        "zoomOut"
      );
      const block1Timeout = setTimeout(
        editClassName,
        3800,
        block1,
        "slideInUp"
      );

      return () => {
        clearTimeout(loadingTimeout);
        clearTimeout(loadingCenterTimeout);
        clearTimeout(block1Timeout);
      };
    }
  }, [loaded]);

  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="res-container">
        <div className="res-row">
          <div id="block-1 b3">
            <div id="loader-wrap">
              <div id="loading">
                <div id="loading-center">
                  <div id="loading-center-absolute">
                    <div id="object">
                      <svg
                        className="loader-logo"
                        viewBox="0 0 800 800"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          className="loader-logo-bg"
                          width="800"
                          height="800"
                        />
                        <rect
                          className="loader-logo-rectangle"
                          y="650"
                          width="800"
                          height="150"
                        />
                      </svg>
                    </div>
                    <div id="loader"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
