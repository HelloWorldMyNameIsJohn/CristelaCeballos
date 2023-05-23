import React from "react";

const Card = (props) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-80 w-full object-cover"
          src={props.image}
          alt="Obra"
          style={{ aspectRatio: "1/1" }}
        />
      </figure>
      <div className="card-body w-52 h-80">
        <h2 className="card-title">{props.title}</h2>
        <p
          className="text-base custom-truncate"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.description}
        </p>
        <div className="card-actions justify-end">
          <label htmlFor={props.id} className="btn btn-primary">
            Ver más
          </label>
        </div>
      </div>
      <input type="checkbox" id={props.id} className="modal-toggle" />

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex">
            <div className="w-">
              <img
                src={props.image}
                className="h-80 w-full object-cover rounded-md"
                style={{ aspectRatio: "1/1" }}
                alt=""
              />
            </div>
            <div className="flex flex-col w-full">
              <h3 className="font-bold text-lg">{props.title}</h3>
              <p className="py-4">{props.description}</p>
              <div className="modal-action items-end">
                <label htmlFor={props.id} className="btn btn-accent">
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
