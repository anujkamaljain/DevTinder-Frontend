import React from "react";

const CancellationandRefund = () => {
  return (
    <div class=" w-[75%] mx-auto py-3 dark:text-white">
      <b class="  flex justify-center text-3xl">
        <h1>REFUND POLICY</h1>
      </b>
      <br />
      <div class=" flex flex-col gap-y-3 text-xl ">
        <li>We offer a 7 days &quot;NO QUESTIONS ASKED &quot;refund Policy.</li>
        <li>
          Within the 7 days of your course purchase, you can ask for the refund
          anytime.
        </li>
        <li>
          For refunds, please please mail us at
          <span>
            <a
              href="mailto:anujkamaljain1234@gmail.com"
              className="text-blue-400"
            >
              {" "}
              anujkamaljain1234@gmail.com
            </a>
          </span>
        </li>
        <li>
          In case of course bundle, a refund will be initiated for the whole
          course bundle, and not for individual courses.
        </li>
        <li>
          After the refund is initiated, it takes around 5-7 business days for
          the amount to be reflected in your bank.
        </li>
        <li>
          Please note that once a refund is processed, no further refunds will
          be provided for the same purchase/course.
        </li>
        <li>
          Purchases made using the &quot;Gift-a-course &quot;feature are not
          eligible for a refund.
        </li>
        <li>Refunds are only provided if you have access to the course.</li>
        <li>
          If your email ID is found to be suspicious or involved in malicious
          activity, a refund will not be initiated.
        </li>
        <li>
          If any queries, feel free to contact us at
          <a
            href="mailto:anujkamaljain1234@gmail.com"
            className="text-blue-400"
          >
            {" "}
            anujkamaljain1234@gmail.com
          </a>
        </li>
      </div>
    </div>
  );
};

export default CancellationandRefund;
