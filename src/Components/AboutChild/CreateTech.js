import React from "react";

function CreateTech({
  updateList,
  handleDisplay,
  handleNew,
  but,
  setName,
  setImage,
  setService,
  setPosition,
  setModel,
  idp,
  name,
  image,
  position,
  service,
  model,
}) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [position, setPosition] = useState("");
  // const [model, setModel] = useState("");
  // const [service, setService] = useState("");

  //name value
  function handleName(e) {
    setName(e.target.value);
    // console.log(name);
  }

  //image value
  function handleImage(e) {
    setImage(e.target.value);
  }

  //position value
  function handlePosition(e) {
    setPosition(e.target.value);
  }

  //model value
  function handleModel(e) {
    setModel(e.target.value);
  }

  //service select
  function handleService(e) {
    setService(e.target.value);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    const nameee = false;
    if (nameee) {
    
    } else {
      const newItem = {
        name,
        image,
        position,
        model,
        service,
      };
      console.log(newItem);

      if (but) {
        fetch("https://carmotive-sinatra-backend.herokuapp.com/technicians", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((r) => r.json())
          .then((newTech) => {
            handleNew(newTech);
            setName("");
            setImage("");
            setPosition("");
            setModel("");
            setService("");
          });
      } else {
        fetch(
          `https://carmotive-sinatra-backend.herokuapp.com/technicians/${idp}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
          }
        )
          .then((r) => r.json())
          .then((updatedItem) => updateList(updatedItem));
        setName("");
        setImage("");
        setPosition("");
        setModel("");
        setService("");
        console.log(newItem);
      }

      handleDisplay();
    }
  }

  return (
    <div className=" flex justify-center">
      <form className="m-10 bg-orange-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Technician name
            </label>
            <input
              value={name}
              onChange={handleName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image Url
            </label>
            <input
              value={image}
              onChange={handleImage}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Position
            </label>
            <input
              value={position}
              onChange={handlePosition}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Position"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Car Model Expertise
          </label>
          <input
            value={model}
            onChange={handleModel}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Car Model"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Profesionalism
          </label>
          <select
            value={service}
            onChange={(e)=>setService(e.target.value)}
            // onChange={(e)=>console.log(e.target.value)}
            className="block appearance-none w-full bg-white border border-orange-400 hover:border-orange-400 px-4 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Color Change</option>
            <option>Motor Tuning</option>
            <option>Accident Towing</option>
            <option>Car Key Repair</option>
            <option>Car Repair</option>
          </select>
        </div>
        {/* <input
          className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
          name="submit"
        /> */}
        <button
          onClick={handleSubmit}
          className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          {but ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
}

export default CreateTech;
