import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Team from "./Team";



function About() {
  return (
    <div>
<h1 className="text-center font-bold text-2xl pt-5">Meet the Crew That Fixes Your Vehicles!</h1>
<div className="mx-10 ">
   <div className="grid gap-6 mb-8 md:grid-cols-2 m-10">
              <div className="min-w-0  bg-white rounded-lg shadow-xs dark:bg-gray-800">
              <img class="h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
              </div>
              <div className="mt-5 min-w-0 flex-wrap text-black rounded-lg ">
                <p className="tracking-wide">
                When 3 former hustlers gathered together 2 years ago they decided, that their love for cars can land them a new field of work!
Since then the WheelMasters fixed, checked and repaired thousands of new and retro cars…
During that long period we expanded our team from just 3 mechanics to a full staff of 20+ people.
Also we now have a strong base of loyal, returning customers whom we always show our appreciation to with extra bonuses and future services discounts!

We’ve always been dedicated to accomplishing 3 critical milestones in each servicing we do, such as:
                </p>
                <div>
                <p className="mt-4 flex">
                <FaCheckCircle style={{fontSize:'20px',color:'orange' ,marginRight:'5px'}}/> FAIR PRICING
                </p>
                <p className="mt-4 flex">
                <FaCheckCircle style={{fontSize:'20px',color:'orange',marginRight:'5px'}}/> DILIGENT TIMING
                </p>
                <p className="mt-4 flex">
                <FaCheckCircle style={{fontSize:'20px',color:'orange',marginRight:'5px'}}/> EXCELLENT QUALITY
                </p>
                </div>
              </div>
            </div>
</div>
<Team/>
</div>
  );
}
export default About;
