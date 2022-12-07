import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../../Assets/Images/heroaria.png";
import Button from "../Buttton/Button";
import "./Home.css";
const Home = () => {
  return (
   <div>
 <div className="md:flex justify-evenly lg:flex items-center bg-black">
      <div className=" md:w-1/2 lg:w-1/2 m-auto p-0 md:p-10 lg:p-10 grid md:block lg:block basis-11/12 md:mt-10 mt-10">
         <div className="md:ml-10 p-2 hero-decs">
         <h1 className="text-center  py-3  md:text-left lg:text-left md:py-4 lg:py-4 text-4xl md:text-8xl">
          Virtual shops <br className="sm:hidden md:block lg:block" />
          made easy.
        </h1>
        <p className="title w-full md:w-1/2 text-lg text-center md:text-left text-center py-6 md:py-3 lg:py-3">
          Give your business Gravvity and set up virtual shops in minutes.
        </p>
        <Link to="/signup">
        <Button width="md:w-[227px]  w-full" height="64.8px" name="Get Start"/> 
          </Link> 
          
        <p className="text-center mt-[3px] md:mt-[63px] lg:mt-[63px]  md:text-left py-2 ">
          Already have an account?
          <a href="/login" className="text-cyan-500 font-bold">
             <Link to="login">Log in</Link>
          </a>
        </p>
         </div>
      </div>
      <div className="hero-img md:basis-2/3 md:py-4 lg:py-4 hidden md:block lg:block">
        <img src={heroImg} className="w-screen" alt="" />
      </div>
    </div>
   </div>
  );
};

export default Home;
