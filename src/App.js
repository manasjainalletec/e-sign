import React, { useRef, useEffect } from "react";
import "./App.css";
import jsPDF from "jspdf";
import GeneratePdf from "./GeneratePdf";
import SignatureCanvas from "react-signature-canvas";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const sigCanvas = useRef();
  const [penColor, setPenColor] = useState("black");
  const [imageURL, setImageURL] = useState(null);
  const colors = ["black", "green", "red"];
  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(URL);
    setOpenModal(false);
  };
  const download = () => {
    const dlink = document.createElement("a");
    dlink.setAttribute("href", imageURL);
    dlink.setAttribute("download", "signature.png");
    dlink.click();
  };
  const [openModel, setOpenModal] = useState(false);
  const reportTemplateRef = useRef(null);
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: [700, 900],
    });
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };
  const printStyles = `
  @media print {
    body {
      zoom: 0.1; // Adjust the zoom level as per your requirements
    }
  }
`;

  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://trident.ac.in/maintain/wp-content/uploads/2021/02/image.png" class="d-block w-100" height='500' width='150' alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://pbs.twimg.com/media/FjSKorFVIAAXJNP.jpg" class="d-block w-100" height='500' width='150' alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.alletec.com/media/blogs/role-of-digital-transformation-in-adoption-of-nep-2020.webp" class="d-block w-100"        height='500' width='150' alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <center>
        <div>
          <style>{printStyles}</style>
          <div ref={reportTemplateRef}>
            <GeneratePdf imageURL={imageURL} />
          </div>
          {openModel && (
            <div className="modalContainer123">
              <div className="modal123">
                <div className="sigPad__penColors">
                  <p>Pen Color:</p>
                  {colors.map((color) => (
                    <span
                      key={color}
                      style={{
                        backgroundColor: color,
                        border: `${
                          color === penColor ? `2px solid ${color}` : ""
                        }`,
                      }}
                      onClick={() => setPenColor(color)}
                    ></span>
                  ))}
                </div>
                <div className="sigPadContainer">
                  <SignatureCanvas
                    penColor={penColor}
                    canvasProps={{ className: "sigCanvas" }}
                    ref={sigCanvas}
                  />
                  <hr />
                  <button onClick={() => sigCanvas.current.clear()}>
                    Clear
                  </button>
                </div>
                <div className="modal__bottom">
                  <button onClick={() => setOpenModal(false)}>Cancel</button>
                  <button className="create" onClick={create}>
                    Create
                  </button>
                  <br />
                  <img src={imageURL} alt="signature" className="signature" />
                  <br />
                  <button
                    onClick={download}
                    style={{ padding: "5px", marginTop: "5px" }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
          <div style={{ marginLeft: 130, marginTop:60 }}>
            <button type="button" class="btn btn-success" onClick={() => setOpenModal(true)}>
              <h4>Create Signature</h4>
            </button>
            <button type="button" class="btn btn-success">
              <h4>Submit</h4>
            </button>
            <button type="button" class="btn btn-success" onClick={handleGeneratePdf}>
              <h4>Generate PDF</h4>
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
