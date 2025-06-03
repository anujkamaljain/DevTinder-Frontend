import React from "react";

const Contactus = () => {
  return (
    <div class=" w-[75%] mx-auto py-3 dark:text-white">
      <b class="  flex justify-center text-3xl">
        <h1>CONTACT US</h1>
      </b>
      <br />
      <div class=" ">
        <div class=" flex flex-col gap-y-3 text-xl ">
          <li>If any query, feel free to contact us!</li>
          <li>
            For any assistance and queries, mail us at
            <span>
              <a href="mailto:anujkamaljain1234@gmail.com" className="text-blue-400"> anujkamaljain1234@gmail.com</a>
            </span>
          </li>
          <li>Our Operational Address is: Ambala, Haryana-133001 </li>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
