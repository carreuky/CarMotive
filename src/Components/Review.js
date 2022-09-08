import React from "react";
import ReviewCard from "./ReviewCard";

function Review() {
  return (
    <div className="mx-10">
      <div className="text-center ">
        <h1 className="font-light text-2xl my-3 ">TESTIMONIALS</h1>
        <p className="font-light text-4xl">
          WHAT OUR <b className="font-bold">CLIENTS SAY</b>
        </p>
      </div>
      <div class="flex flex-wrap -mx-8"></div>
      <ReviewCard />
    </div>
  );
}
export default Review;
