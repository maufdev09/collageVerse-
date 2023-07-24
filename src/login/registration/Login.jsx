import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';



const Login = () => {
    const [showPassord, setShowPassord] = useState(false);
    const { signIn } = useContext(AuthContext);
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();




    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
          .then((res) => {
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err.message);
          });      };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card flex-shrink-0 w-full mx-auto my-6 max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-5xl font-bold text-center pt-5">Login now!</h1>
  
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "Required",
                })}
              />
              {errors?.email && errors?.email.message}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex">
                <input
                  type={showPassord ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered "
                  {...register("password", {
                    required: "Required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassord(!showPassord);
                  }}
                  className="btn rounded-s-none"
                >
                  {showPassord ? "Hide" : "Show"}
                </button>
              </div>
              {errors?.password && errors?.password.message}
  
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="pb-5">
              Dont Have an Account?
              <Link className="link text-blue-600" to="/register">
                Register
              </Link>
            </p>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white hover:bg-slate-700 bg-black"
              >
                Login
              </button>
            </div>
            <div className="divider">Or</div>
            <button
              className="btn  text-white hover:bg-slate-700 bg-black"
            //   onClick={handleGooglelogin}
            >
              {" "}
              <FaGoogle></FaGoogle> Sign with Google
            </button>
          </div>
        </div>
      </form>
    );
};

export default Login;