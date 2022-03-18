import React from 'react';
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="Login-container">
        <div className="height">
        </div>
        <span className="border border-success rounded1">
      <form class = "pad">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</span>
<div className="redirectToLogin my-4">
          <p>
            New to ARC?{" "}
            <Link to = "/"><button className="btn btn-primary mx-3" type="submit">
              Register
            </button>
            </Link>
          </p>
        </div>
    </div>
  )
}