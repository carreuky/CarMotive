import React,{ useState, useEffect } from "react";
import { GoQuote} from "react-icons/go";


function ReviewCard({key,review,customer}) {
    const [customers] = useState([customer]);
    //console.log(customers.length)
    const name=customers.map((cus)=>{
        return(
            cus.name
        )
    })



  return (
        <div key={key} className="w-full md:w-1/3 p-5">
          <div className="h-full p-0.5 bg-gradient-to-r p-[2px] from-[#E7D36E] via-[#C97016] to-[#EDDA2F] transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000 rounded-lg">
            <div className="h-full px-7 py-8 bg-white rounded-lg">
            <GoQuote style={{fontSize:'15px'}}/>
              <p
                className="mb-8 ml-4 text-lg font-light text-gray-900"
                data-config-id="auto-txt-3-1"
              >{review}
              </p>
              <h3
                className="mb-1.5 font-heading font-bold text-lg text-gray-900"
                data-config-id="auto-txt-4-1"
              >
                {name}
              </h3>
            </div>
          </div>
        </div>
  );
}
export default ReviewCard;
