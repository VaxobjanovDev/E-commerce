import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {AiOutlineGithub} from 'react-icons/ai'
import './Modal.css'

const Modal = () => {
  return (
    <div class="container modals">
      <div className="row wrapper">
				<div className='text-header text-center mt-3'>
					<h1>Choose a Login</h1>
				</div>
        <div className="col-md-6 d-flex flex-column p-3 mt-5">
          <div className="btn  btn-secondary login-button">
            <FcGoogle className='modal-icons'/>
            Google
          </div>
          <div className="btn btn-primary login-button">
            <FaFacebook className='modal-icons' />
            Facebook
          </div>
          <div className="btn btn-dark login-button">
            <AiOutlineGithub  className='modal-icons' />
            GitHub
          </div>
        </div>
        <div className="col-md-6 right p-3 mt-5">
          <form className='w-100'>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control w-75"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control w-75"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-outline-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
