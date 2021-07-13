import React, { useState, useEffect } from "react";

import "./css/ResidentContainer.css";

import ResidentInfo from "./residents/ResidentInfo";

function ResidentContainer({ residents }) {
  const [listResidents, setListResidents] = useState([]);

  useEffect(() => {
    if (residents) {
      if (residents.length <= 10) {
        setListResidents(
          residents.map((resident, index) => {
            return <ResidentInfo key={index} url={resident} />;
          })
        );
      } else {
        const reduceList = [];
        for (let i = 0; i < 10; i++) {
          reduceList.push(residents[i]);
        }
        setListResidents(
          reduceList.map((resident, index) => {
            return <ResidentInfo key={index} url={resident} />;
          })
        );
      }
    }
  }, [residents]);

  return <div className="ResidentContainer">{listResidents}</div>;
}

export default ResidentContainer;
