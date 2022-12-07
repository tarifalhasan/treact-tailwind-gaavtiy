import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttton/Button";
import Input from "../input/Input";
const Login = () => {
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
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
    <div className="md:flex justify-evenly md:py-20 md:p10 lg:flex md:py-20 sm:text-center bg-black mt-10">
      <div className="md:pl-20 lg:pl-20  grid md:block lg:block">
        <h1 className="text-4xl md:text-6xl text-center py-2  md:text-left lg:text-left md:py-2 lg:py-2">
          Login <br className="hidden md:block lg:block" />
          to your <br className="hidden md:block lg:block  " />
          virtual store
        </h1>
        <p className="text-center md:text-left already-account">
          Don't have an account?
          <a href="/" className="text-cyan-500 font-bold ">
            <Link to="/signup">Sign Up</Link>
          </a>
        </p>
      </div>

      <div className="basis-1/2">
        <form onSubmit={handleSubmit}>
          <div className="w-full md:w-1/2 lg:m-1/2">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="login_btn justify-evenly m-auto flex md:justify-between lg:justify-between pt-5 items-center">
              <Button width="w-[127px]" name='Login'/>
              <span>
                <Link to="/forgot_password">Forgot password?</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
