import React from "react";
import { Carousel } from "react-carousel-minimal";

function Slide() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      caption: "LOOKING FOR THE <br> RIGHT VEHICLE REPAIR ?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579103769354-8796259d8d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "QUALITY CAR SERVICE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568236700632-c0cfc08f486a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
      caption: "YOUR ONE STOP <br> CAR CARE SERVICES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632685062337-095b722134ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "EFFICIENT TECHNICIANS <br> WILL SOLVE ANY PROBLEM",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",
      caption: "LET US MIND MORE ABOUT YOUR CAR",
    },
  ];

  const captionStyle = {
    fontSize: "3em",
    fontWeight: "bold",
    width: "100%",
    color: "orange",
    marginBottom: "10px",
    marginTop: "10px",
  };

  return (
    <div className="mt-25">
      <div style={{ textAlign: "center" }}>
        <div style={{}}>
          <Carousel
            data={data}
            time={2000}
            width="auto"
            height="400px"
            captionStyle={captionStyle}
            // slideNumber={true}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            // slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "auto",
              // maxHeight: "500px",
              //   margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Slide;
