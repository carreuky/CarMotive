import React from "react";
import { FaCog, FaBolt, FaCarCrash } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { NavLink } from "react-router-dom";


function CardServices() {
  return (
    <div className="flex justify-center">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="text-center">
          <a
            href="#"
            className="h-80 block p-6 max-w-xs bg-orange-400 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <FaCog style={{ fontSize: "90px", marginLeft: "60px" }} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NavLink to='/services'>PREVENT & REPAIR</NavLink>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              We'll perform the car checkup and find issues with cooling system,
              engine, steering and suspension for you!
            </p>
          </a>
        </div>
        <div className="text-center">
          <a
            href="#"
            className=" h-80 block p-6 max-w-xs bg-orange-400 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <FaBolt style={{ fontSize: "90px", marginLeft: "60px" }} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NavLink to='/services'>COMMON REPAIR</NavLink>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Each repair project puts before us a number of uniquue tasks, the
              solution of which will help to achieve the highest results.
            </p>
          </a>
        </div>
        <div className="text-center">
          <a
            href="#"
            className=" h-80 block p-6 max-w-xs bg-orange-400 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            {" "}
            <GiHouseKeys style={{ fontSize: "90px", marginLeft: "60px" }} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NavLink to='/services'>CAR KEY REPAIR</NavLink>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Having your keys getting broken is always a hardly expected and a
              stressful situation. Use of latest tech to solve.
            </p>
          </a>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="h-80 block p-6 max-w-xs bg-orange-400 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <FaCarCrash
              style={{ color: "black", fontSize: "90px", marginLeft: "60px" }}
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <NavLink to='/services'>ACCIDENTS TOWING</NavLink>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Got involved in an unfortunate accident and got stuck, we are
              ready to save the day!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardServices;
