import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="navbar w-4/5 rounded-full bg-base-100 mt-0">
        <div className="navbar-start">
          <h2 className="font-semibold normal-case text-xl">
            Cristela Ceballos
          </h2>
        </div>
        <div className="navbar-end">
          <a href="https://wa.me/qr/FT4YBXZZYEPSI1">
            <img
              className="w-6 rounded "
              src="assets/whatsapp.png"
              alt="Foto perfil"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
