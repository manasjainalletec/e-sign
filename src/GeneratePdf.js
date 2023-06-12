import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import QuoteGenerator from "./quote";

const GeneratePdf = ({ imageURL }) => {
  const [hideDiv, setHideDiv] = useState(true);

  const divStyle = {
    height: hideDiv ? 0 : "auto",
    overflow: hideDiv ? "hidden" : "visible",
  };

  const [downloadedImageUrl, setDownloadedImageUrl] = useState(null);
  const handleImageDownload = (imageDataUrl) => {
    setDownloadedImageUrl(imageDataUrl);
  };
  return (
    <>
      <div>
        <div>
          <div>
            <img
              style={{ marginLeft: 260 }}
              src="https://ipocentral.in/wp-content/uploads/2022/12/All-E-Technologies-IPO-GMP.jpg"
              height="100"
              width="150"
            />
          </div>
          <div style={{ fontSize: 36, marginLeft: 220 }}>
            Alletec's E Sign App
          </div>
        </div>
        <div>
          <div style={divStyle}>
          <QuoteGenerator onImageDownload={handleImageDownload} />

          </div>
          
          {downloadedImageUrl && <img src={downloadedImageUrl} height="1100" width="1100"/>}
        </div>
        <div style={{ marginLeft: "28rem", marginTop: "-31rem" }}>
          <img src={imageURL} width="120" height="80" />
        </div>
      </div>
    </>
  );
};
export default GeneratePdf;
