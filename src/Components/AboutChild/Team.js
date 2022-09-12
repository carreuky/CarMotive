import React, { useState } from "react";
import CreateTech from "./CreateTech";
import TeamCard from "./TeamCard";

function Team({updateList, team, delMember, handleNew, searchHandle }) {
  const [disp, SetDisp] = useState(false);  
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [model, setModel] = useState('');
  const [position, setPosition] = useState('');  
  const [service, setService] = useState('');
  const [butt,SetButt]=useState(true)


  // const [notfound, SetNotFound] = useState(false);

  function handleDisplay() {
    SetDisp(!disp);
  }

 
  function handleUp(id, name, image, position, model,service,butg){
    setId(id)
    setName(name)
    setImage(image)
    setPosition(position)
    setModel(model)
    setService(service)
    SetButt(butg)
    console.log(butg);

  }

  const mems = team.map((mem) => {
    return (
      //console.log(mem)
      <TeamCard
      disp={disp}
      SetDisp={SetDisp}
      key={mem.id}
        handle={handleUp}
        delMember={delMember}
        id={mem.id}
        name={mem.name}
        image={mem.image}
        position={mem.position}
        service={mem.service_id}
        model={mem.carmodel}
      />
    );
  });

  const form = (
    <div className="mx-24  mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {mems}
      {/* {not ? notP:{mems}} */}
    </div>
  );

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl pt-5">The Team</h1>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleDisplay}
          className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-2 mx-20 rounded-full w-36"
        >
          {disp ? "View Team" : "Add Member"}
        </button>
        <input
          onChange={(event) => searchHandle(event.target.value)}
          type="text"
          id="simple-search"
          className=" mr-24 bg-gray-50 border border-orange-400 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-44 pl-10 p-2.5 dark:bg-orange-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
      <div>
        {disp ? (
          <CreateTech updateList={updateList} handleDisplay={handleDisplay} but={butt} handleNew={handleNew} setId={setId} name={name} image={image} setImage={setImage} service={service} setService={setService} setName={setName} position={position} setPosition={setPosition} setModel={setModel} model={model} />
        ) : (
          form
        )}
        {/* {form}
        <CreateTech /> */}
      </div>
    </>
  );
}
export default Team;
