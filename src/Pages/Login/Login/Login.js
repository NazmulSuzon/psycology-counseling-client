import React from "react";
import "./Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="h-[800px] flex justify-center items-center loginBG">
      <div className="p-8 shadow-2xl card glass w-96">
        <h2 className="text-4xl font-bold text-primary">Please Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Email"
            />
          </div>
          <p>{data}</p>
          <button className="px-8 mt-3 text-white border-0 btn bg-primary">Login</button>
          <p className="mt-3 text-xl text-black">No account? <Link className="font-bold text-secondary"><u>Create One</u></Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
