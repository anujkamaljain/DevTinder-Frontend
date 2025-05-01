import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-300 text-primary-content p-3 mt-10">
        <aside>
          <img src="/Logo.png" className="w-18 h-18" />
          <p className="font-bold">
            DevTinder Pvt. Ltd.
            <br />
            Providing reliable tech since 2025
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
