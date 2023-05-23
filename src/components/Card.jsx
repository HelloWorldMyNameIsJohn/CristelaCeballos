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
          <label htmlFor={props.id} className="btn btn-outline">
            Ver más
          </label>
        </div>
      </div>
      <input type="checkbox" id={props.id} className="modal-toggle" />

      {/* The button to open modal */}
{/* <div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/2">
        <img
          src={props.image}
          className="h-80 w-full object-cover rounded-md sm:h-auto sm:rounded-none"
          style={{ aspectRatio: "1/1" }}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full sm:w-1/2">
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="py-4">{props.description}</p>
        <div className="modal-action mt-auto">
          <label htmlFor={props.id} className="btn btn-accent">
            Cerrar
          </label>
        </div>
      </div>
    </div>
  </div>
</div> */}

      {/* Put this part before </body> tag */}
      {<div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-col sm:flex-row">
            <div className="">
              <img
                src={props.image}
                className="h-80 w-full object-cover rounded-md"
                style={{ aspectRatio: "1/1" }}
                alt=""
              />
            </div>
            <div className="flex flex-col sm:w-full sm:ml-16">
              <h3 className="font-bold text-3xl">{props.title}</h3>
              <p className="py-6 flex-grow">{props.description}</p>
              <div className="modal-action absolute bottom-0 right-0 sm:static sm:ml-auto sm:self-end mt-4">
                <label htmlFor={props.id} className="btn btn-accent">
                  Cerrar
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Card;
