import React, { useState, useEffect } from "react";

import "../css/ResidentInfo.css";
import { getDataApi } from "../../services/getDataApi";

function ResidentInfo({ url }) {
  const [resident, setResident] = useState(null);
  const [color, setColor] = useState("grey");

  const style = { borderColor: color };

  useEffect(() => {
    if (url) {
      const getResident = async () => {
        setResident(await getDataApi(url));
      };
      getResident();
    }
  }, [url]);

  useEffect(() => {
    if (resident) {
      if (resident.status === "Alive") setColor("green");
      else if (resident.status === "Dead") setColor("red");
    }
  }, [resident]);

  return (
    <div className="ResidentInfo">
      {resident ? (
        <>
          <img src={resident.image} alt={resident.name} style={style} />
          <h4>{resident.name}</h4>
          <div>
            <p>{resident.status} - {resident.species}</p>
            <p>
              <span>Origin: </span>
              {resident.origin.name}
            </p>
            <p>
              <span>Episodes: </span>
              {resident.episode.length}
            </p>
          </div>
        </>
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default ResidentInfo;
