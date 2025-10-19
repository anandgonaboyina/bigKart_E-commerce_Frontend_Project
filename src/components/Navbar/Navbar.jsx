import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from '../../Modals/Login/LoginSignup'
import {ReactDOM} from "react"
import logo from "../Assets/logo.png"

import { createPortal } from "react-dom";

function Navbar() {
     const [showLoginModal, setLoginModal] = useState(false);


function LoginModal({ onClose }) {
  return createPortal(
    <dialog className="modal flex justify-center items-center p-5 " open>
      <div className="modal-box mx-auto max-w-md w-full  flex justify-center items-center bg-transparent">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 text-[20px] text-white bg-red-400/50" onClick={onClose}>✕</button>
        </form>
        <Login />
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
}




  return (
    <div  className="navbar sticky top-0 z-50 bg-warning shadow-sm w-full">
      <div className="flex-1 flex ">
        <img src={logo} alt="" className="w-12 sm:w-10 md:w-12 lg:w-14 rounded-full ring ring-primar" />
        <Link to={"/bigKart_E-commerce_Frontend_Project/"} className="btn btn-ghost text-xl hover:border-0 active:bg-transparent hover:bg-transparent">BigKart</Link>
      </div>




      <div className="flex gap-2  items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-[16px] focus:outline-0 bg-base-100 text-base-content h-8 w-24 md:w-auto"
        />

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-red-600 w-0.5 text-white">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-2 lg:w-52 w-40 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu text-center menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52 w-30 p-2 shadow"
          >
            <li>
                
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li>
     <button className="" onClick={() => setLoginModal(true)}>Login</button>
        {showLoginModal && <LoginModal onClose={() => setLoginModal(false)} />}
               </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;