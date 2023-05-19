import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-hot-toast";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () =>{
        setDeletingDoctor(null);
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

  const handleDeleteDoctor = doctor =>{
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Doctor ${doctor.name} deleted successfully.`)
        }
    })
}

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-7">
      <h3 className="my-6 text-3xl font-bold text-secondary">
        Manage Doctors: {doctors.length}
      </h3>

      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-bold text-black">
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}.</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="text-white btn btn-error btn-xs">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name}, it cann't be undone.`}
            successAction = {handleDeleteDoctor}
            modalData = {deletingDoctor}
            closeModal={closeModal}
        />
      }
    </div>
  );
};

export default ManageDoctors;
