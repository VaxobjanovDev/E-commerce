import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../logoImg/mylogo.jpg";
import "./Navbar.css";

const Navbar = () => {
	const state = useSelector((state)=>state.handleCart)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex">
          <Link to="/">
            <a className="navbar-brand">
              <img className="logo" src={logoImg} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/product' className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link">Cart</Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to='cart' className="cart-button mx-1 btn">
                <IoCartOutline className="icon" />
                <span className="circle">{state.length }</span>
              </Link>
              <button className="mx-1 btn btn-outline-secondary">
                Sign Up
              </button>
              <button className="mx-1 btn btn-outline-secondary">Log In</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
