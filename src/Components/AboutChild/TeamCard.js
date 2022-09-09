import React, { useState } from "react";

function TeamCard({ delMember, id, name, image, position, service, model }) {
  // console.log(service)
  // const [serviceDoing] = useState([service]);
  //console.log(customers.length)
  // const doing = serviceDoing.map((serv) => {
  //   return serv.task;
  // });
  //console.log(service)

  const doing = () => {
    if (service === 1) return "Color Change";
    else if (service === 2) return "Motor Tuning";
    else if (service === 3) return "Accident Towing";
    else if (service === 4) return "Car Key Repair";
    else return "Car Repair";
  };

  let txt = doing();
  // console.log(txt)

  function handleDeleteClick() {
    console.log(id);
    fetch(`https://carmotive-sinatra-backend.herokuapp.com/technicians/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => delMember(id));
    //delMember(id)
  }

  return (
    <div
      key={id}
      className="  text-center bg-orange-400 card rounded-md border-2 border-orange-500 w-64"
    >
      <div className="bg-white hover-zoom ripple rounded-md rounded-b none ripple-surface ripple-surface-light">
        <img src={image} className="w-full h-56 object-cover" />
      </div>
      <div className="card-body">
        <h5 className="mt-4">
          <span className=" ms-2 ">{name}</span>
        </h5>

        <a href="" className="text-reset">
          <h5 className="font-normal text-gray-700 card-title ">{position}</h5>
        </a>
        <a href="" className="text-reset">
          <p>{txt}</p>
        </a>
        <h6 className="mb-3 text-gray-700">Expert in {model} Models</h6>
      </div>
      {/* buttons group */}
      <div className="mb-4 inline-flex">
        <button
          onClick={handleDeleteClick}
          className="bg-white hover:bg-red-500 hover:text-white text-gray-800 font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
        {/* <button className="bg-white hover:bg-black hover:text-white text-gray-800 font-bold py-1 px-2 rounded mx-4">
          Edit
        </button> */}
      </div>
    </div>
  );
}
export default TeamCard;
