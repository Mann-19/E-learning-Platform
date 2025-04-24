import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <section className="flex">
        <div className="max-w-[50%] min-w-[50%] h-[100vh] px-6 py-4 bg-primary-accent flex flex-col">
          <h2 className="font-extrabold text-3xl">EduMarg</h2>

          <img
            src="/login_graphic.svg"
            alt=""
            className="aspect-square w-[500px] mt-10 ml-8"
          />
        </div>

        <LoginForm />
      </section>
    </>
  );
};

export default Login;
