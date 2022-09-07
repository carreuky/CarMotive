import React from "react";

function TeamCard({key,name,image,position,service,model}) {

  return (
    <div key={key} className="text-center bg-orange-400 card rounded-md border-2 border-orange-500">
          <div className="bg-white hover-zoom ripple ripple-surface ripple-surface-light">
            <img src={image}
              className="w-90 rounded-b-none rounded-md h-32" />
          </div>
          <div className="card-body">
          <h5><span className="text-2xl ms-2">{name}</span></h5>

            <a href="" className="text-reset">
              <h5 className="font-normal text-gray-700 card-title ">{position}</h5>
            </a>
            <a href="" className="text-reset">
              <p>{service}</p>
            </a>
            <h6 className="mb-3 text-gray-700">Expert in {model} Models</h6>
          </div>
        </div>
  );
}
export default TeamCard;
