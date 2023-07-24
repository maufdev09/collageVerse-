import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from '../providers/AuthProviders';

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;



const Apply = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/collage/${id}`);
        setCollege(response?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColleges();
  }, [id]);


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const img_upload_URL = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  console.log(img_hosting_token);

  const onSubmit = (data) => {
    const {
      subject,
      Candidate_Name,
      image,
      candidateEmail,
      phone_number,
      address,
      dateOfBirth,
    } = data;
    const formData = new FormData();
    formData.append("image", image[0]);

    fetch(img_upload_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const collageItem = {
            Candidate_Name,
            imgURL,
            phone_number,
            candidateEmail,
            address,
            subject,
            dateOfBirth,
            college:college


          };

          console.log(collageItem);
          fetch(
            "http://localhost:5000/apply-collages",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(collageItem),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success(`your application  upploaded successfully`);
                reset();
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error(`err.message`);
            });
        }
      });
  };

  return (
    <div className="w-[70%] my-5 mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-5xl font-bold text-center pt-5 ">Apply collage</h1>
        <div className="">
          <div className="form-control col-span-4">
            <label className="label">
              <span className="label-text">Candidate Name</span>
            </label>
            <input
              type="text"
              
              className="input input-bordered"
              {...register("Candidate_Name", {
                required: "Required",
              })}
            />
            {errors?.className && errors?.className.message}
          </div>

          {/* upload image */}

          <div className="form-control col-span-4">
            <label className="label-text py-2 ">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full max-w-xs"
              {...register("image", {
                required: "Required",
              })}
            />
            {errors?.image && errors?.image.message}
          </div>

          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Candidate Phone number</span>
            </label>
            <input
              type="tel"
              className="input input-bordered"
              {...register("phone_number", {
                required: "Required",
              })}
            />
            {errors?.instructorName && errors?.instructorName.message}
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Candidate Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              className="input input-bordered"
              {...register("candidateEmail", {
                required: "Required",
              })}
            />
            {errors?.instructorEmail && errors?.instructorEmail.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Subject </span>
            </label>
            <input
              type="text"
              
              className="input input-bordered"
              {...register("subject", {
                required: "Required",
              })}
            />
            {errors?.availableSeats && errors?.availableSeats.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">address</span>
            </label>
            <input
              type="text"
              
              className="input input-bordered"
              {...register("address", {
                required: "Required",
              })}
            />
            {errors?.address && errors?.address.message}
          </div>


          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">date of birth</span>
            </label>
            <input
              type="date"
              
              className="input input-bordered"
              {...register("dateOfBirth", {
                required: "Required",
              })}
            />
            {errors?.dateOfBirth && errors?.dateOfBirth.message}
          </div>

          <div className="form-control col-span-4 w-11/12 mt-6">
            <button type="submit" className="btn  bg-black text-white">
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
