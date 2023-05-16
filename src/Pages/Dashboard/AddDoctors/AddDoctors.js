import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const {data: specialties, isLoading} = useQuery({
    queryKey: ['specialty'],
    queryFn: async () =>{
        const res = await fetch('http://localhost:5000/appointmentSpecialty');
        const data = await res.json();
        return data;
    }
  })

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData => {
        if(imgData.success){
            console.log(imgData.data.url);
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }

            // save doctor information to the database
            fetch('http://localhost:5000/doctors', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then (result =>{
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/managedoctors');
            })
        }
    })
  };

  if(isLoading){
    return <Loading/>
  }

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
          <select 
            {...register("specialty", { required: "Email is required" })}
            className="w-full max-w-xs text-black select">
            <option disabled selected>
              Please Select a Specialty
            </option>
            {specialties.map(specialty => <option
                key={specialty._id}
                value={specialty.name}
            >{specialty.name}</option>)}
          </select>
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="text-xl font-bold text-black label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="w-full max-w-xs input input-bordered"
            placeholder="Enter Your Name"
          />
          {errors.img && (
            <p role="alert" className="text-error">
              {errors.img?.message}
            </p>
          )}
        </div>
        <button className="w-full max-w-xs mt-3 text-white border-0 btn bg-primary form-control">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
