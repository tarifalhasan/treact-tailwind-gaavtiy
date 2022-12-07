import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttton/Button";
import Input from "../input/Input";
import "./SignUp.css";
const SignUp = () => {
  const [values, setValues] = useState({
    fristname: "",
    lastname: "",
    email: "",
    companyname: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fristname",
      type: "text",
      placeholder: "Fristname",
      label: "Frist Name",
      pattern: "^[a-zA-Z ]{2,40}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lasttname",
      label: "Last Name",
      pattern: "^[a-zA-Z ]{2,40}$",
      required: true,
    },
    {
      id: 3,
      name: "companyname",
      type: "text",
      placeholder: "companyName",
      label: "company Name",
      pattern: "^[a-zA-Z ]{2,40}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",

      label: "Confirm Password",
      pattern: values.password,
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
    <>
      <div className="md:flex justify-evenly mt-2 md:mt-20 md:py-10 md:p-10 lg:flex md:py-20 sm:text-center pt-10 bg-black">
        <div className="md:pl-20 lg:pl-20 grid md:block lg:block  place-items-center">
          <h1 className="text-4xl md:text-6xl text-center py-2  md:text-left lg:text-left">
            Sign Up <br className="hidden md:block lg:block" />
            & design <br className="hidden md:block lg:block  " />
            your store
          </h1>
          <p className="text-center md:text-left already-account">
            Already have an account?
            <Link to="/login" className="text-cyan-500 font-bold ">
              Login
            </Link>
          </p>
        </div>
        <div className="basis-1/2	text-left bg-black">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4">
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>

            <div className="flex items-center py-4 ml-10 md:ml-2 lg:ml-2 terms">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                for="link-checkbox"
                className="ml-2 label-terms"
              >
                I agree to Gravvity’s  
                <a
                  href="/"
                  className=" hover:underline ml-1"
                >
                  Terms and conditions
                </a>
                &
                <a
                  href="/"
                  className=" hover:underline ml-1"
                >
                 Privacy policy.
                </a>
              </label>
            </div>
            <div className="btn pb-10 px-6 md:px-1">
              <Button width={'md:w-[144px] w-full'} height="h-[64.8px]" name='Sign Up'/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
