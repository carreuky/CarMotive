import React from "react";

function Welcome() {
  return (
    <div>
      <div class=" mx-10 p-5 bg-orange-400 flex justify-center">
          <div class=" flex flex-col justify-center items-center text-center">
            <h5 class="text-white text-5xl font-medium mb-2">WELCOME</h5>
            <h1 class="text-lg mb-4 border-b-4 border-black">
              TO OUR COMPANY!
            </h1>
            <p className="w-full text-slate-900 text-xl  ">Car Tunza is a crew of true auto enthusiast, all of whom are sincerely passionate about enhancing the performance and looks of your car! All the creativity, 
            craftsmanship, and skill that each member of our crew has makes any car that we upgrade 
            or customize a truly unique vehicle. Also, the artfulness of our design masters will help
             even the wildest ideas that you may have about your car’s aesthetics come true!</p>
          </div>
      </div>
    </div>
  );
}
export default Welcome;
