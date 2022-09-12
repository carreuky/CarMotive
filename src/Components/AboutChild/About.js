import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Team from "./Team";

function About() {
  const [team, setTeam] = useState([]);
  const [unMutated, setUnMutated] = useState([]);
  const [not, setNot] = useState(false)

  function handleNew(newTech) {
    // console.log(newTech);
    setTeam([...team, newTech]);
  }

  function deleteMember(id) {
    const updatedTeam = team.filter((team) => team.id !== id);
    //  console.log(updatedTeam.length)
    setTeam(updatedTeam);
  }

  function searchHandle(value) {
    // console.log(value)
    const searchedMember = unMutated.filter(
      (mem) =>
        mem.name.toLowerCase().includes(value.toLowerCase()) ||
        mem.position.toLowerCase().includes(value.toLowerCase()) ||
        mem.carmodel.toLowerCase().includes(value.toLowerCase())
    );

    if(searchedMember !==0){
      setTeam(searchedMember)
    }
    else
      setNot(!not)
  }
  function updateList(updatedItem) {
    const updatedItems = team.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    // setTeam(updatedItems);    
    console.log(updatedItems);   
  }

  useEffect(() => {
    fetch("https://carmotive-sinatra-backend.herokuapp.com/technicians")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setTeam(data);
        setUnMutated(data)
        // console.log(data)
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl pt-5">
        Meet the Crew That Fixes Your Vehicles!
      </h1>
      <div className="mx-10 ">
        <div className="grid gap-6 mb-8 md:grid-cols-2 m-10">
          <div className="min-w-0  bg-white rounded-lg shadow-xs">
            <img
              className="h-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </div>
          <div className="mt-5 min-w-0 flex-wrap text-black rounded-lg ">
            <p className="tracking-wide">
              When 3 former hustlers gathered together 2 years ago they decided,
              that their love for cars can land them a new field of work! Since
              then the Hustlers fixed, checked and repaired thousands of new
              and retro cars… During that long period we expanded our team from
              just 3 mechanics to a full staff of 20+ people. Also we now have a
              strong base of loyal, returning customers whom we always show our
              appreciation to with extra bonuses and future services discounts!
              We’ve always been dedicated to accomplishing 3 critical milestones
              in each servicing we do, such as:
            </p>
            <div>
              <p className="mt-4 flex">
                <FaCheckCircle
                  style={{
                    fontSize: "20px",
                    color: "orange",
                    marginRight: "5px",
                  }}
                />{" "}
                FAIR PRICING
              </p>
              <p className="mt-4 flex">
                <FaCheckCircle
                  style={{
                    fontSize: "20px",
                    color: "orange",
                    marginRight: "5px",
                  }}
                />{" "}
                DILIGENT TIMING
              </p>
              <p className="mt-4 flex">
                <FaCheckCircle
                  style={{
                    fontSize: "20px",
                    color: "orange",
                    marginRight: "5px",
                  }}
                />{" "}
                EXCELLENT QUALITY
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team updateList={updateList} team={team} not={not} delMember={deleteMember} handleNew={handleNew} searchHandle={searchHandle} />
    </div>
  );
}
export default About;
