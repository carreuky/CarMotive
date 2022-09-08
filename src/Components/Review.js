import React,{ useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";


function Review() {
    const [reviews, setReviews] = useState([]);

    const reviewDisp=reviews.map((rev)=>{
        return(
            //console.log(mem)
            <ReviewCard
            key={rev.id}
            review={rev.review}
            customer={rev.customer}
            />
        )
    })
    

    useEffect(() => {
        fetch("http://127.0.0.1:9292/reviews")
          .then((r) => r.json())
          .then((data) => {
            console.log('fff')
            console.log(data)
            setReviews(data);
          });
      }, []);
  return (
    <div className="mx-10">
      <div className="text-center ">
        <h1 className="font-light text-2xl my-3 ">TESTIMONIALS</h1>
        <p className="font-light text-4xl">
          WHAT OUR <b className="font-bold">CLIENTS SAY</b>
        </p>
      </div>
      <div className="flex flex-wrap -mx-8">
      {reviewDisp}
      </div>
    </div>
  );
}
export default Review;
