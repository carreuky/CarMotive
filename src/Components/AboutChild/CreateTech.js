import React from "react";

function CreateTech() {
  return (
    <div className=" flex justify-center">
      <form className="m-10 bg-orange-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Technician name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Image Url
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="text"
          >
            Position
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Position"
          />
        </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="text"
          >
            Car Model Expertise
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Car Model"
          />
        </div>
        <div className="mb-4">
          <select className="block appearance-none w-full bg-white border border-orange-400 hover:border-orange-400 px-4 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Color Change</option>
            <option>Motor Tuning</option>
            <option>Accident Towing</option>
            <option>Car Key Repair</option>
            <option>Car Repair</option>
          </select>
        </div>
        <button
          className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateTech;
