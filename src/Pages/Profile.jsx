import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';


const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${user?.email}`);
        setProfile(response?.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching profile data.');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditProfile = () => {
                window.my_modal_2.showModal()

    // Implement your edit profile logic here
    // For example, redirect to a separate edit profile page
    // or show a modal for editing the profile.
    console.log('Edit profile button clicked!');
  };

const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm();

          const onSubmit = (data) => {
            console.log(data);


            fetch(
              `http://localhost:5000/update-profile/${user.email}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  toast.success("profile updated successfully");
                  reset()
                  
                }
              });


          }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          profile && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">This Profile</h3>
                <button
                  onClick={handleEditProfile}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
              </div>
              <p className="text-gray-700">Name: {profile.name}</p>
              <p className="text-gray-700">Email: {profile.email}</p>
              <div className="mt-4 w-24 h-24 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={profile.imgurl}
                  alt="Profile"
                />
              </div>
            </>
          )
        )}
      </div>

{/* Open the modal using ID.showModal() method */}

<dialog id="my_modal_2" className="modal">
<form
      method="dialog"
      onSubmit={handleSubmit(onSubmit)}
      className="modal-box"
    >
      <h3 className="font-bold text-lg">Edit profile</h3>

      {/* Name Input */}
      <div className="form-control mb-4">
        <input
          {...register('name', { required: true })}
          name="name"
          defaultValue={profile?.name}

          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      {/* Image URL Input */}
      <div className="form-control mb-4">
        <input
          {...register('imgurl', { required: true })}
          name="imgurl"
          defaultValue={profile?.imgurl}

          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        {errors.imgurl && (
          <span className="text-red-500">Image URL is required</span>
        )}
      </div>

      <div className="text-right">
        <input
          type="submit"
          value="Update Changes"
          className="btn bg-black text-white hover:bg-slate-700"
        />
      </div>
    </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
      
    </div>
  );
};

export default Profile;
