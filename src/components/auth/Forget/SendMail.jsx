import React from "react";
const SendMail = () => {
  return (
    <div className="md:w-1/2	px-5 m-auto py-20">
      <h2 className="text-2xl md:text-4xl w-full md:w-3/4 lg:w-3/4">
        You’ve got mail John! Please check your email to verify your account.
      </h2>
      <p className="text-slate-400 text-base py-4">Please ensure that you also check your spam folder.</p>
      <p className="text-lg">I didn’t get an email? <a href="/" className="text-teal-600">Resend</a></p>
    </div>
  );
};

export default SendMail;
