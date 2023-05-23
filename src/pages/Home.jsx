import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

const cuadros = [
  {
    id: 1,
    title: "Puerquito",
    description: "El amor, a pesar de las circunstancias, nos hace compasivos.",
    image: "assets/puerquito.jpg",
  },
  {
    id: 2,
    title: "Cocktails",
    description: "Un cocktail para un lugar elegante.",
    image: "assets/cocktails.jpg",
  },
  {
    id: 3,
    title: "Michelada",
    description: "¿Una michelada?, ¡en cualquier momento!",
    image: "assets/michelada.jpg",
  },
  {
    id: 4,
    title: "Ventana",
    description: "Él conoce hasta el interior de mi alma.",
    image: "assets/ventana.jpg",
  },
  {
    id: 5,
    title: "Perico",
    description:
      "Lleno de alegria me recuerda que la vida es un carnaval,  impregnado de vibra positiva para cambiar cualquier ambiente.",
    image: "assets/perico.jpg",
  },
  {
    id: 6,
    title: "Confía en la magia",
    description:
      "Busco embellecer un lugar a través de las letras. Entregó mis habilidades y mi corazón en cada trazo!",
    image: "assets/magia.jpg",
  },
  {
    id: 7,
    title: "Mural de flores",
    description: "Cualquier sitio es más bonito con un mural.",
    image: "assets/mural.jpg",
  },
  {
    id: 8,
    title: "Menú de cafetería",
    description: "Un menú ilustrativo para tu cafetería.",
    image: "assets/cafe.jpg",
  },
  {
    id: 9,
    title: "Top Burger",
    description: "Una hamburguesa asombrosa.",
    image: "assets/burger.jpg",
  },
  {
    id: 10,
    title: "Cerveza",
    description: "Con una cerveza se va la tristeza.",
    image: "assets/cerveza.jpg",
  },
  {
    id: 11,
    title: "El Toro",
    description:
      "Quién eres? Eres tú y no yo. Eres fuerte porque la fuerza está en ti. La grandeza en tu única manera de existir. Eres poder. Fuego corre en tu interior. Eres una decisión. La justicia está en tu lado izquierdo. El coraje en tu lado derecho. Eres una pasión de mi corazón.",
    image: "assets/toro.jpg",
  },
  {
    id: 12,
    title: "Cacatua Dorada",
    description:
      "Mi querida Cacatúa dorada, eres un sueño hecho realidad. Tu existencia es una decisión impulsada por el amor propio y la búsqueda de la libertad. Posees una belleza y grandeza indescriptibles, acompañadas de una ternura que cautiva. A pesar de tu perfección, también abrazas tu imperfección, reconociendo que eres frágil. Dependes tanto de Dios como de mí, entrelazando nuestras vidas en un vínculo especial.",
    image: "assets/cacatua.jpg",
  },
];
const Home = () => {
  const elementRef = useRef(null);

  const click = () => {
    elementRef.current.scrollIntoView({ behaivor: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Hero click={click} />
      <h1 id="Galeria" className="font-bold text-5xl text-center my-16">
        Galeria
      </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {cuadros.map((item) => {
            return (
              <div key={item.id} className="m-4 sm:my-3 ">
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
