import React, { useRef, useState } from "react";
import "./Form.css";
const Form = () => {
  const fullNameRef=useRef(null)
  const emailRef=useRef(null)
  const mobileRef=useRef(null)
  const postalCodeRef=useRef(null)
  const dobRef=useRef(null)
  const genderRef=useRef(null)
  const addressRef=useRef(null)
  const countryRef=useRef(null)
  // const nameRegExp = /^[A-Za-z\s]*$/;
  const clearValues=()=>{
    fullNameRef.current.value = null;
          emailRef.current.value = null;
          mobileRef.current.value = null;
          dobRef.current.value = null;
          addressRef.current.value = null;
          postalCodeRef.current.value = null;
          countryRef.current.value = null;
          genderRef.current.value = null;
  }
  const [userData, setUserData] = useState({
    fullName: null,
    email: null,
    mobile: null,
    postalCode: null,
    dob: null,
    gender: null,
    address: null,
    country: null,
  });
  let submitEnable = {
    fullName: false,
    email: false,
    mobile: false,
    postalCode: false,
    dob: false,
    gender: false,
    address: false,
    country: false,
  };

  const valueChange = (e) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (userData.fullName == null) {
      document.getElementById("errorTextName").classList.remove("d-none");
      document.getElementById("fullNameID").classList.add("showErrorInput");
    } else {
      console.log(userData.fullName);
      document.getElementById("errorTextName").classList.add("d-none");
      document.getElementById("fullNameID").classList.remove("showErrorInput");
      submitEnable.fullName = true;
    }
    if (userData.email == null) {
      document.getElementById("errorTextEmail").classList.remove("d-none");
      document.getElementById("emailID").classList.add("showErrorInput");
    } else {
      console.log(userData.email);

      document.getElementById("errorTextEmail").classList.add("d-none");
      document.getElementById("emailID").classList.remove("showErrorInput");
      submitEnable.email = true;
    }
    if (userData.mobile == null) {
      document.getElementById("errorTextMobile").classList.remove("d-none");
      document.getElementById("mobileID").classList.add("showErrorInput");
    } else {
      console.log(userData.mobile);
      document.getElementById("mobileID").classList.remove("showErrorInput");
      document.getElementById("errorTextMobile").classList.add("d-none");
      submitEnable.mobile = true;
    }
    if (userData.dob == null) {
      document.getElementById("errorTextDob").classList.remove("d-none");
      document.getElementById("dobID").classList.add("showErrorInput");
    } else {
      document.getElementById("errorTextDob").classList.add("d-none");
      document.getElementById("dobID").classList.remove("showErrorInput");
      submitEnable.dob = true;
    }
    console.log(submitEnable);
    if (
      submitEnable.fullName &&
      submitEnable.email &&
      submitEnable.mobile &&
      submitEnable.dob
    ) {
      console.log("data saved");
      //local storage validation
      let userArray = JSON.parse(localStorage.getItem("User Data"));
      if (userArray == null) {
        userArray = [];
        userArray.unshift(JSON.stringify(userData));
        localStorage.setItem("User Data", JSON.stringify(userArray));
        setUserData({
          fullName: null,
          email: null,
          mobile: null,
          postalCode: null,
          dob: null,
          gender: null,
          address: null,
          country: null,
        });
        clearValues();

      } else {
        let alreadyExistingMail = userArray.filter((element) => {
          return JSON.parse(element).email === userData.email;
        });
        // console.log(alreadyExistingMail);
        if (alreadyExistingMail.length === 0) {
          userArray.push(JSON.stringify(userData));
          localStorage.setItem("User Data", JSON.stringify(userArray));
          clearValues();
          // fullNameRef.current.value = null;
          setUserData({
            fullName: null,
            email: null,
            mobile: null,
            postalCode: null,
            dob: null,
            gender: null,
            address: null,
            country: null,
          });
        } else {
          alert("Your email already exists!!!Try with different email");
        }
      }
    }
  };
  return (
    <>
      <div className="col-md-auto m-3 p-4 form-main">
        <h4 style={{ textAlign: "center" }}>Registration Form</h4>
        <div className="row mt-2">
          <div className=" ">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control "
              id="fullNameID"
              placeholder="Enter Full Name"
              name="fullName"
              onChange={valueChange}
              ref={fullNameRef}
            ></input>
            <div className="form-text d-none text-danger" id="errorTextName">
              Enter your valid full name
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className=" ">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailID"
              placeholder="Enter Email address"
              name="email"
              onChange={valueChange} ref={emailRef}
            ></input>
            <div className="form-text d-none text-danger" id="errorTextEmail">
              Enter your valid email address
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 ">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              id="mobileID"
              placeholder="Enter Mobile Number"
              name="mobile"
              onChange={valueChange} ref={mobileRef}
            ></input>
            <div className="form-text d-none text-danger" id="errorTextMobile">
              Enter your valid mobile number
            </div>
          </div>
          <div className="col-md-6 dob">
            <label className="form-label">Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="dobID"
              name="dob"
              onChange={valueChange} ref={dobRef}
            ></input>
            <div className="form-text d-none text-danger" id="errorTextDob">
              Enter your date of birth
            </div>
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
              onChange={valueChange} ref={genderRef}
            />{" "}
            <label className="form-label">Male</label>
          </div>
          <div className="col-md-auto " ref={genderRef}>
            <input
              type="radio"
              id="gender"
              value="Female"
              name="gender"
              onChange={valueChange} ref={genderRef}
            />{" "}
            <label className="form-label">Female</label>
          </div>
          <div className="col-md-auto ">
            <input
              type="radio"
              id="gender"
              value="Other"
              name="gender"
              onChange={valueChange} ref={genderRef}
            />{" "}
            <label className="form-label">Prefer not to say</label>
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
              name="address"
              onChange={valueChange} ref={addressRef}
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 ">
            <select
              name="country"
              className="form-control"
              onChange={valueChange} ref={countryRef}
            >
              <option value="" selected disabled>
                Country <span className="caret"></span>
              </option>
              <option value="India" name="country">
                India
              </option>
              <option value="Nepal" name="country">
                Nepal
              </option>
              <option value="Pakistan" name="country">
                Pakistan
              </option>
            </select>
          </div>
          <div className="col-md-6 ">
            <input
              type="number"
              className="form-control"
              id="postalCodeID"
              placeholder="Enter postal code"
              name="postalCode"
              onChange={valueChange} ref={postalCodeRef}
            ></input>
          </div>
        </div>
        <div className="row mt-4">
          <div>
            <button className="btn btn-primary form-control" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
