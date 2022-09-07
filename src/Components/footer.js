import React from "react";
import { FaFacebook, FaTwitter, FaGooglePlay,FaLinkedinIn ,FaPhoneAlt} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="text-center text-black">
        <div className="container p-5">
          <div className="">
            <p className="flex justify-center items-center">
            <a href="facebook" className="mx-10" style={{color:'orange'}}>
                <FaFacebook />
              </a>

              <a href="facebook" className="mx-10" style={{color:'orange'}}>
                <FaTwitter />
              </a>
              <a href="facebook" className="mx-10" style={{color:'orange'}}>
                <FaGooglePlay />{" "}
              </a>
              <a href="facebook" className="mx-10" style={{color:'orange'}}>
                <FaLinkedinIn/>
                </a>
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
          <FaPhoneAlt style={{color:'orange'}}/>
          <p className=''>+254785223556</p>
          </div>
        </div>
        <div className="text-center p-2">© 2021 Copyright:Car Tunza</div>
      </footer>
    </div>
  );
}
export default Footer;
