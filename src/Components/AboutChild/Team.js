import React from 'react'
import TeamCard from './TeamCard'

function Team({team}) {
const mems=team.map((mem)=>{
    return(
        //console.log(mem)
        <TeamCard
        key={mem.id}
        name={mem.name}
        image={mem.image}
        position={mem.position}
        service={mem.service_id}
        model={mem.carmodel}
        />
    )
})

console.log(team)

return(
    <>
<div>
    <h1 className="text-center font-bold text-2xl pt-5">The Team</h1>
</div>
<div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
{/* <TeamCard/> */}
{mems}
<button className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-2 rounded-full w-36">
  Add Technician
</button>
</div>
<div>
<form className="m-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Technician name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for='text'>
        Position
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Position"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for='text'>
        Car Model Expertise
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Car Model"/>
    </div>
    <div className="mb-4">
    <select class="block appearance-none w-full bg-white border border-orange-400 hover:border-orange-400 px-4 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Color Change</option>
    <option>Motor Tuning</option>
    <option>Accident Towing</option>
    <option>Car Key Repair</option>
    <option>Car Repair</option>
  </select>
    </div>
      <button className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
     
  </form>
</div>

</>

)
}
export default Team