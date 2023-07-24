import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {


    const { user, logout} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logout()
          .then(console.log("logout successfully"))
          .catch((err) => console.log(err));
      };

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link>Home</Link></li>
    <li><Link to="collages">Colleges</Link></li>
    <li><Link to="admissions">Admission</Link></li>
    <li><Link to="mycollage">My College</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">CollageVerse </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link>Home</Link></li>
    <li><Link to="collages">Colleges</Link></li>
    <li><Link to="admissions">Admission</Link></li>
    <li><Link to="mycollage">My College</Link></li>
    </ul>
  </div>
<div className='navbar-end'>
{user && (
            <Link to={`profile`}>
            <div
              className="w-8 mx-5 tooltip tooltip-left"
              data-tip={user.displayName}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="rounded-full " />
              ) : (
                <FaUserCircle className=" text-4xl max-sm:text-2xl mx-3"></FaUserCircle>
              )}
            </div></Link>
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn text-white bg-black">
              LogOUT
            </button>
          ) : (
            <Link to="/login" className="btn text-white bg-black">
              login
            </Link>
          )}
</div>
</div>
        </div>
    );
};

export default Navbar;