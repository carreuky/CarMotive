import React from 'react'
import TeamCard from './TeamCard'

function Team({team}) {

console.log(team)

return(
    <>
<div>
    <h1 className="text-center font-bold text-2xl pt-5">The Team</h1>
</div>
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
<TeamCard/>
</div>

</>

)
}
export default Team