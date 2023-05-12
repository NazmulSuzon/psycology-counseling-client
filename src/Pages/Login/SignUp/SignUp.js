import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data) =>{
      console.log(data);
      setSignUpError('');
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        toast('User Created Successfully.')
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email);
        })
        .catch(err => console.log(err))
      })
      .catch(error => {
        setSignUpError(error.message)
        console.log(error)});
    }

    const saveUser = (name, email) =>{
      const user = {name, email};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        getUserToken(email);        
      })
    }

    const getUserToken = email =>{
      fetch(`http://localhost:5000/jwt?email=${email}`)
      .then(res => res.json())
      .then(data =>{
        if(data.accessToken){
          localStorage.setItem('accessToken', data.accessToken);
          navigate('/');
        }
      })
    }

    return (
        <div className="h-[800px] flex justify-center items-center signupBG">
      <div className="p-8 shadow-2xl card glass w-96">
        <h2 className="text-4xl font-bold text-primary">Please Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {required: "Name is required"})}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Name"
            />
            {errors.name && <p role="alert" className="text-error">{errors.name?.message}</p>}
          </div>
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="text-2xl text-black label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {required: "Email is required"})}
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
              {...register("password",{
                required: "Password is required",
                minLength: {value:6, message:'Password must be 6 characters or longer'},
                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number, and special character.'}
              })}
              className="w-full max-w-xs input input-bordered"
              placeholder="Enter Your Password"
            />
            {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}
          </div>
          <button className="px-8 mt-3 text-white border-0 btn bg-primary">Sign Up</button>
          {signUpError && <p className='text-red-600'>{signUpError}</p> }
          <p className="mt-3 text-xl text-black">Already have an account? <Link to="/login" className="font-bold text-secondary"><u>Login</u></Link> </p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;