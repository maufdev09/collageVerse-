import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';


const Mycollage = () => {

    const { user} = useContext(AuthContext);
    console.log(user?.email);

    const [colleges, setColleges] = useState([]);
    const [college, setCollege] = useState(null);
    console.log(colleges);
        useEffect(() => {
          const fetchColleges = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/get-applied-collages/${user?.email}`);
              setColleges(response?.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchColleges();
        }, []);


          const handlereview = (data) => {

            window.my_modal_2.showModal()

            setCollege(data)
    
          }
      
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm();

          const onSubmit = (data) => {


            const review ={
                rating: data.rating,
                feedback: data.feedback,
                reviewby:user?.email,
                reviewdate: Date(),
                reviewCollage:college._id

            }
console.log(review);

fetch(
  "http://localhost:5000/send-review",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(review),
  }
)
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
      toast.success(`your review upploaded successfully`);
      reset();
    }
  })
  .catch((err) => {
    console.log(err);
    toast.error(`err.message`);
  });





              };



              const validateRating = (value) => {
                if (value && (value < 0 || value > 5)) {
                  return 'Rating must be between 0 and 5';
                }
                return true;
              };
            
        

    return (
        <div
        className=" container mx-auto p-4
    "
      >
        <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
        {colleges.map((mycollage) => (
          <div
            key={mycollage._id}
            className="flex flex-col justify-between md:flex-row items-start md:items-center bg-white p-4 border rounded shadow mb-4"
          >
            <img
              src={mycollage.college.college_image}
              className="w-32 h-32 object-cover rounded-lg md:mr-4"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold text-lg mb-2">{mycollage.college?.college_name}</p>
              <p>subject : {mycollage.subject}</p>
              <p>Adress : {mycollage.address}</p>
            </div>
            <div className="flex flex-col gap-4">
             
              
              <button className="btn  bg-blue-500 text-white hover:bg-blue" onClick={()=>handlereview(mycollage.college)}>review</button>
            </div>
          </div>
        ))}
  
{/* Open the modal using ID.showModal() method */}

{/* Open the modal using ID.showModal() method */}

<dialog id="my_modal_2" className="modal">
  <form method="dialog"  onSubmit={handleSubmit(onSubmit)}
 className="modal-box">
  <h3 className="font-bold text-lg">Give Your FeedBack</h3>
        <div className="form-control">
          <textarea
            {...register("feedback", { required: true })}
            name="feedback"
            placeholder='FEEDBACK'
            className="textarea textarea-bordered h-24"
          ></textarea>
          <label className="label"></label>
          {errors.feedback && <span>This field is required</span>}
        </div>
        <div className="form-control">
        <label htmlFor="rating">Rating:</label>
        <input
          {...register('rating', {
            required: 'Rating is required',
            validate: validateRating,
          })}
          name="rating"
          type="number"
          placeholder="rating"
          className={`textarea textarea-bordered h-10 ${
            errors.rating ? 'border-red-500' : ''
          }`}
        />
        {errors.rating && (
          <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>
        )}
        </div>
        <div className="text-right">
          <input
            type="submit"
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

export default Mycollage;