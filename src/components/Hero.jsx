import React from "react";
import { Link } from "react-router-dom";

const Hero = (props) => {
  const scrollToSection = () => {
    const section = document.getElementById('Galeria');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center">
      <div className="hero w-4/5 mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-96" src="assets/blobCristela2.png" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Hola, gusto en conocerte!</h1>
            <p className="py-6">
              "Disfruto el proceso de plasmar mis emociones y pensamientos en
              diferentes medios artísticos como lienzos, pizarras o murales, me
              esfuerzo por encontrar inspiración en todo lo que me rodea. El
              arte me permite crear piezas auténticas y significativas que puedo
              compartir con el mundo."
            </p>
            <button className="btn btn-outline" onClick={scrollToSection}>Mi trabajo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
