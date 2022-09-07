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
</div>

</>

)
}
export default Team