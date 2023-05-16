import React from "react";
import { useForm } from "react-hook-form";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleAddDoctor = (data) => {
    console.log(data);
  };

  return (
    <div className="pl-7 w-96">
      <h3 className="my-6 text-3xl font-bold text-secondary">Add A Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-xl font-bold text-black label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <p role="alert" className="text-error">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-xl font-bold text-black label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p role="alert" className="text-error">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-xl font-bold text-black label-text">Specialty</span>
          </label>
          <select className="w-full max-w-xs text-black select">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <button className="w-full max-w-xs mt-3 text-white border-0 btn bg-primary form-control">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
