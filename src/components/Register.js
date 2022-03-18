import React from "react";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="register-form my-3">
        <span className="border border-success rounded1">
          <form className="pad">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPhone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Pincode
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPincode"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputConfirmPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </span>
        <div className="redirectToLogin my-4">
          <p>
            Already have an account?{" "}
            <Link to = "/login"><button className="btn btn-primary " type="submit">
              Log In
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
