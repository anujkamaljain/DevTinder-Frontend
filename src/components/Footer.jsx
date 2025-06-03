import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (event.target.innerText === "Terms and conditions")
      navigate("/terms-and-conditions");
    else if (event.target.innerText === "Cancellation and Refund")
      navigate("/cancellation-and-refund-policies");
    else if (event.target.innerText === "Privacy policy")
      navigate("/privacy-policy");
    else navigate("/contact-us");
  };

  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-300 text-primary-content p-3 mt-10">
        <aside>
          <img src="/Logo.png" className="w-18 h-18" />
          <p className="font-bold">
            DevTinder Pvt. Ltd.
            <br />
            Providing reliable platform since 2025
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <div className="flex w-full justify-center -mt-6">
          <p
            className="mr-3 hover:underline hover:cursor-pointer"
            onClick={handleClick}
          >
            Terms and conditions
          </p>
          <p
            className="mr-3 hover:underline hover:cursor-pointer"
            onClick={handleClick}
          >
            Cancellation and Refund
          </p>
          <p
            className="mr-3 hover:underline hover:cursor-pointer"
            onClick={handleClick}
          >
            Privacy policy
          </p>
          <p
            className="mr-3 hover:underline hover:cursor-pointer"
            onClick={handleClick}
          >
            Contact us
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
