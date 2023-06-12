import React, { useRef, useEffect, useState } from "react";
import * as htmlToImage from "html-to-image";
import axios from 'axios';
import Weather from "./Weather";
import QuoteComponent from "./crmAPI";

function QuoteGenerator({ onImageDownload }) {
  const domEl = useRef(null);
  const [imageDataUrl, setImageDataUrl] = useState(null);

  useEffect(() => {
    const downloadImage = async () => {
      const dataUrl = await htmlToImage.toPng(domEl.current);
      setImageDataUrl(dataUrl);
      onImageDownload(dataUrl);
    };

    downloadImage();
  }, [onImageDownload]);




  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);




  return (
    <div
        id="domEl"
        ref={domEl}
        style={{
          backgroundColor: "white",
          height: "96rem",
          width : "90rem"
        }}
      >
        <div>
        
          
          {/* <h1 style={{ fontFamily: "“Comic Sans MS”, “Comic Sans”, cursive" }}>
            Quote Template
          </h1>
          {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <hr />
          </li>
        ))}
        <Weather/> */}
        <QuoteComponent />
          <hr />
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            10th May 2023
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            Manas Jain
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            Dear Customer ,
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            I'm sending you this quote regarding “PandaDoc Demo”. This quote is
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            effective from to . Please get back to me with your decision soon.
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            Sincerely ,
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            Chemtech User
          </p>
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            Chemtech{" "}
          </p>
          <hr />
          <p style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}></p>
          <h2>Please find your quote details below : </h2>
          <p />
          <table style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}>
            <tbody>
              <tr>
                <th align="left">Quote ID : </th>
                <td>QUO-01006-G5Q7C2</td>
              </tr>
              <tr>
                <th align="left">Quote Discount percentage : </th>
                <td>10.00</td>
              </tr>
              <tr>
                <th align="left">Quote Discount Amount: </th>
                <td>2900.00</td>
              </tr>
              <tr>
                <th align="left">Total Detail Amount: </th>
                <td>$2,310,260.00</td>
              </tr>
              <tr>
                <th align="left">Total Tax: </th>
                <td>$100.00</td>
              </tr>
              <tr align="left">
                <th>Total Amount: </th>
                <td>$2,310,160.00</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <table
            border={3}
            style={{ fontFamily: "“Helvetica”, “Arial”, Sans-Serif" }}
          >
            <tbody>
              <tr>
                <th align="left">Product Name</th>
                <th align="left">Price Per Unit</th>
                <th align="left">Quantity</th>
                <th align="left">Line Item Total</th>
              </tr>
              <tr>
                <td>ArmBand 100 </td>
                <td>$1,250.00</td>
                <td>50.00000</td>
                <td>$62,500.00</td>
              </tr>
              <tr>
                <td>AssemblyVirtuoso CPU + Controller</td>
                <td>$13,620.00</td>
                <td>40.00000</td>
                <td>$544,800.00</td>
              </tr>
              <tr>
                <td>AssemblyVirtuoso 300 </td>
                <td>$26,236.00</td>
                <td>60.00000 </td>
                <td>$1,574,160.00</td>
              </tr>
              <tr>
                <td>AssemblyVirtuoso Grip Array </td>
                <td>$1,840.00 </td>
                <td>70.00000</td>
                <td>0 $128,800.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default QuoteGenerator;
