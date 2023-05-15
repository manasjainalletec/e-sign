import React, { useRef, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const GeneratePdf = ({ imageURL}) => {
  
  
  

  return (
    <>
      <div>
        <div>
            <div>
                <img style={{ marginLeft:250 }} src="https://ipocentral.in/wp-content/uploads/2022/12/All-E-Technologies-IPO-GMP.jpg" height='100' width='150'/>
            </div>
          <div style={{ fontSize:36, marginLeft:200 }}>
            Alletec's E Sign App
          </div>
        </div>

        <div>
          <div>
            <img style={{ marginLeft:60 }}
              src="https://files.jotform.com/jotformapps/simple-invoice-template-6613c6136b00956ab22924dc4bf96711_og.png"
              width="600"
              height="600"
            />
          </div>
        </div>

        <div>
          <div style={{ marginLeft: "31rem", marginTop: "-10rem" }}>
            <img
              src={imageURL}
              width="120"
              height="80"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneratePdf;
