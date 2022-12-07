import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttton/Button";
import Input from "../input/Input";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",

    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:flex justify-evenly md:py-20 md:p10 lg:flex md:py-20 sm:text-center bg-black mt-10 md:mt-0">
      <div className="md:pl-20 lg:pl-20  grid md:block lg:block md:mt-4 ">
        <h1 className="text-4xl md:text-6xl text-center  md:text-left lg:text-left md:py-2 lg:py-2">
          Forgot <br className="hidden md:block lg:block" />
          Password <br className="hidden md:block lg:block  " />
          No Problem
        </h1>
        <p className="py-2 font-light	 text-base text-center md:text-left">
          Don't have an account?
          <a href="/" className="text-cyan-500 font-bold ">
            <Link to="/signup">Sign Up</Link>
          </a>
        </p>
      </div>

      <div className="basis-1/2">
        <form onSubmit={handleSubmit} className="pt-10">
          <div className="w-full md:w-1/2 lg:m-1/2">
            <>
              <p className="text-center md:text-left lg:text-center text-lg">
                Please enter your email and we'll email you instructions on how
                to reset your password.
              </p>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </>
            <div className="login_btn w-full m-auto  flex justify-between py-5 p-10 md:p-0 lg:p-0 mt-4">
              <Link to="/send_mail">
                <Button width={"w-[144px]"} name="Send Mail" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
