import React from "react";

function ReviewCard() {
  return (
        <div class="w-full md:w-1/3 p-5">
          <div class="h-full p-0.5 bg-gradient-to-r p-[2px] from-[#E7D36E] via-[#C97016] to-[#EDDA2F] transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000 rounded-lg">
            <div class="h-full px-7 py-8 bg-white rounded-lg">
              <p
                class="mb-8 text-lg text-gray-900"
                data-config-id="auto-txt-3-1"
              >
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>
              <h3
                class="mb-1.5 font-heading font-bold text-lg text-gray-900"
                data-config-id="auto-txt-4-1"
              >
                Darrell Steward
              </h3>
            </div>
          </div>
        </div>
  );
}
export default ReviewCard;
