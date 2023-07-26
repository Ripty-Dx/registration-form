import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="col-md-auto m-3 p-4 form-main">
        <h4 style={{ textAlign: "center" }}>Registration Form</h4>
        <div className="row mt-2">
          <div className=" ">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter Full Name"
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className=" ">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="Enter Email address"
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 ">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              id=""
              placeholder="Enter Mobile Number"
            ></input>
          </div>
          <div className="col-md-6 ">
            <label className="form-label">Birth Date</label>
            <input type="date" className="form-control" id=""></input>
          </div>
        </div>
        <div className="row mt-2">
          <label className="form-label">Gender</label>
          <div className="col-md-auto ">
            <input
              type="radio"
              id="gender"
              value="Male"
              name="gender"
              className=""
            />{" "}
            <label className="form-label">Male</label>
          </div>
          <div className="col-md-auto ">
            <input type="radio" id="gender" value="Female" name="gender" />{" "}
            Female
          </div>
          <div className="col-md-auto ">
            <input type="radio" id="gender" value="Other" name="gender" />{" "}
            Prefer not to say
          </div>
        </div>
        <div className="row mt-2">
          <div className=" ">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter address"
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 ">
            <select name="country" className="form-control" required>
            <option style={{color:"darkgray"}} value="" selected disabled >Country <span className="caret"></span></option>
            <option value="India" name="country" >India</option>
            <option value="Nepal" name="country">Nepal</option>
            <option value="Pakistan" name="country">Pakistan</option>
            </select>
          </div>
          <div className="col-md-6 ">
            <input
              type="number"
              className="form-control"
              id=""
              placeholder="Enter postal code"
            ></input>
          </div>
        </div>
        <div className="row mt-4">
          <div>
            <button className="btn btn-primary form-control">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
