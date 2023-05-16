import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, {replace: true});
  }

  const handleLogin = data =>{
    // console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message)
      });
  }

  return (
    <div className="h-[800px] flex justify-center items-center loginBG">
      <div className="p-8 shadow-2xl card glass w-96">
        <h2 className="text-4xl font-bold text-center text-primary">Please Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {required: "Email Address is required"})}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Email"
            />
            {errors.email && <p role="alert" className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {value:6, message:'Password must be 6 characters or longer'},
                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong'}
              })}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Password"
            />
            {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}
            <div>
            {loginError && <p className="font-bold text-red-600">{loginError}</p> }
          </div>
            <label className="label">
              <span className="text-xl text-black label-text">Forget Password?</span>
            </label>
          </div>
          <button className="px-8 mt-3 text-white border-0 btn bg-primary" value="login">Login</button>
          <p className="mt-3 text-xl text-black">No account? <Link to="/signup" className="font-bold text-secondary"><u>Create One</u></Link> </p>
          <div className="text-black divider before:bg-primary after:bg-secondary">OR</div>
          <button className="w-full text-black border-secondary btn btn-outline">CONTINUE WITH GOOGLE</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
