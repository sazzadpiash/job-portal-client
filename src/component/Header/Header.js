import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../context/AuthContext";
import myLogo from "./../../assets/Job.png";

const Header = () => {
    const { loading, user, logOut } = useContext(Auth);
    return (
        <div>
            <div className="navbar backdrop-blur-sm fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="w-36" src={myLogo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li>{user?.displayName}</li> */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                {loading ? (
                    <button className="btn btn-primary btn-sm loading  ml-auto">
                        loading
                    </button>
                ) : (
                    <>
                        {user ? (
                            <button
                                onClick={() => logOut()}
                                className="btn btn-primary ml-auto btn-sm"
                            >
                                Log out
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-primary ml-auto btn-sm"
                            >
                                Login
                            </Link>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
