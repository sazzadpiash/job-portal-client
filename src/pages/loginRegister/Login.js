import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../../context/AuthContext";

const Login = () => {
    const { signIn, setUser, setLoading, googleSignIn } = useContext(Auth);
    const navigate = useNavigate();
    const signInHandler = (event) => {
        event.preventDefault();
        signIn(event.target.email.value, event.target.password.value)
            .then((userCred) => {
                setUser(userCred.user);
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={signInHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <div className="divider">OR</div>
                            <button
                                type="button"
                                onClick={googleSignIn}
                                className="btn btn-ghost border-black"
                            >
                                <FcGoogle className="text-3xl"></FcGoogle>
                            </button>
                            <p className="text-sm text-center mt-2">
                                Don't have an account?{" "}
                                <Link className="text-primary" to="/register">
                                    create here!
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
