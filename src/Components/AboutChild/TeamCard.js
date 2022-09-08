import React, { useState } from "react";

function TeamCard({delMember, id, name, image, position, service, model }) {
  const [serviceDoing] = useState([service]);
  //console.log(customers.length)
  const doing = serviceDoing.map((serv) => {
    return serv.task;
  });
  //console.log(service)

  //delete function
  // function handleDeleteClick() {
  //   console.log(id);
  //   fetch(`https://jbap.herokuapp.com/jobs/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => handleDelete(id));
  // }
  function handleDeleteClick(){
    console.log(id)
  //   fetch(`http://127.0.0.1:9292/technicians/${id}`, {
  //     method: "DELETE",
  // }) 
  // .then((r) => r.json())
  // .then(() => delMember(id));
  delMember(id)
  }

  return (
    <div
      key={id}
      className="text-center bg-orange-400 card rounded-md border-2 border-orange-500"
    >
      <div className="bg-white hover-zoom ripple ripple-surface ripple-surface-light">
        <img src={image} className="w-90 rounded-b-none rounded-md h-32" />
      </div>
      <div className="card-body">
        <h5>
          <span className="text-2xl ms-2">{name}</span>
        </h5>

        <a href="" className="text-reset">
          <h5 className="font-normal text-gray-700 card-title ">{position}</h5>
        </a>
        <a href="" className="text-reset">
          <p>{doing}</p>
        </a>
        <h6 className="mb-3 text-gray-700">Expert in {model} Models</h6>
      </div>
      {/* buttons group */}
      <div className="inline-flex">
        <button onClick={handleDeleteClick} className="bg-white hover:bg-red-500 hover:text-white text-gray-800 font-bold py-1 px-2 rounded">
          Delete
        </button>
        <button className="bg-white hover:bg-black hover:text-white text-gray-800 font-bold py-1 px-2 rounded mx-4">
          Edit
        </button>
      </div>
    </div>
  );
}
export default TeamCard;
