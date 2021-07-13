import React from "react";

import viaje from "../../img/viaje.png";

import "../css/Imagen.css";

function Imagen() {
  return (
    <div className="Imagen">
      <img src={viaje} alt="Viaje" />
    </div>
  );
}

export default Imagen;
