import React, { useState, useEffect } from "react";

function Services() {
  const [service, setService] = useState([]);

  const card = service.map((serv) => {
    return (
      <div
        key={serv.id}
        className="block rounded-lg shadow-lg shadow-orange-300 bg-white text-center  m-4"
      >
        <div className="py-3 px-6 font-bold  border-b border-orange-300">
          {serv.task}
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">{serv.description}</p>
        </div>
        <div className="py-3 px-6  font-bold border-t border-orange-300 ">
          KSH {serv.price} 
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetch("https://carmotive-sinatra-backend.herokuapp.com/services")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setService(data);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center ">
          <h1 className="font-light text-2xl pt-5">Services</h1>
          <p className="font-light">
            With years upon years under the belt of each crew member of our
            team,
            <br /> working cars and bikes comes natural, easy and fun for us
            all!
            <br /> Make sure to hire our services if you want your car to stay
            awesome!
          </p>
        </div>
        <div className="m-10 flex justify-center content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {card}
        </div>
      </div>
    </div>
  );
}
export default Services;
