import React,{useState} from "react";
import CreateTech from "./CreateTech";
import TeamCard from "./TeamCard";

function Team({ team, delMember ,handleNew}) {
  const [disp, SetDisp] = useState(false);

  function handleDisplay() {
    SetDisp(!disp);
  }



  const mems = team.map((mem) => {
    return (
      //console.log(mem)
      <TeamCard
        delMember={delMember}
        id={mem.id}
        name={mem.name}
        image={mem.image}
        position={mem.position}
        service={mem.service}
        model={mem.carmodel}
      />
    );
  });

  // console.log(team);

  const form = (
    <div className="ml-10 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {/* <TeamCard/> */}
      {mems}
    </div>
  );

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl pt-5">The Team</h1>
      </div>
      <button onClick={handleDisplay} className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-2 mx-10 rounded-full w-36">
        {disp ? "View Team" : "Add Member"}
      </button>
      <div>
        {disp?(<CreateTech handleDisplay={handleDisplay} handleNew={handleNew}/>):(form)}
      {/* {form}
        <CreateTech /> */}
      </div>
    </>
  );
}
export default Team;
