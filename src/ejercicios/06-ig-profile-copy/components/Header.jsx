import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="header-container">
        <img
          src="./images/assets/imgs/Mi-gato-tiene-genes-de-leopardo.jpg"
          className="perfil-img"
          alt="icono"
        />
        <div className="perfil-name-container">
          <h4 className="perfil-name">Mono_felix</h4>
          <h4 className="perfil-title">Sponsored</h4>
        </div>
        <img
          src="./images/assets/iconos/puntos.png"
          className="menu-header"
          alt="tres puntos"
        />
      </header>
    </div>
  );
};
