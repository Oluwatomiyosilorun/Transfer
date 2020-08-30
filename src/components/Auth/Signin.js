import React from 'react'
import {Link} from 'react-router-dom';
import "../Auth/auth.css"
import SideA from '../layouts/SideA';


function Signin() {
    return (
        <div className="main-wrapper">
            <div className="container-fluid px-0 h-100">
                <div className="row p-0">
                    <SideA />
                    <div className="col-lg-6 sideB">
                        <div class="form-container">
                            <h1>Sign Up</h1>
                            <form className="mt-3">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="name form-control" placeholder="Name" required />
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="email form-control" placeholder="Email" required />
                                </div>

                                <div className="form-group">
                                <label>Password</label>
                                <input type="pwd" className="pwd form-control" placeholder="Password" required />
                            </div>

                                <button className="btn btn-success w-100 p-3"><b>Sign Up</b></button>
                            </form>

                            <div className="mt-2">
                                <p>Already have an account? 
                                    <span className="pl-2">
                                        <Link to={''} className="login">Login</Link> 
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;
