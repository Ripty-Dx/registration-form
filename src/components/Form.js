import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  // const nameRegExp = /^[A-Za-z\s]*$/;
  const clearValues = () => {
    document.getElementById("registration-form").reset();
  };
  const [submitEnable, setSubmitEnable] = useState(false);
  const [userData, setUserData] = useState({
    fullName: null,
    email: null,
    mobile: null,
    dob: null,
    gender: null,
    address: null,
    country: null,
    postalCode: null,
  });

  const valueChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let keys = Object.keys(userData);
    // console.log(userData);
    keys.forEach((key) => {

      let inputDiv = document.getElementById(key);
      let errorDiv = inputDiv.getElementsByClassName("errorMessage")[0];
      if (userData[key] == null) {
        inputDiv
          .getElementsByTagName("input")[0]
          ?.classList.add("showErrorInput");
        inputDiv
          .getElementsByTagName("select")[0]
          ?.classList.add("showErrorInput");
        errorDiv.classList.remove("d-none");
      } else {
        errorDiv.classList.add("d-none");
        inputDiv
          .getElementsByTagName("input")[0]
          ?.classList.remove("showErrorInput");
        inputDiv
          .getElementsByTagName("select")[0]
          ?.classList.remove("showErrorInput");
        
      }
     
      // clearValues();
    });

    console.log(userData);
    // let values=Object.values(userData);
    if (!Object.values(userData).includes(null)) {
      setSubmitEnable(true);
    }
    if (submitEnable) {
      console.log("data will be stored");
      //local storage validation
      let userArray = JSON.parse(localStorage.getItem("User Data"));
      if (userArray == null) {
        userArray = [];
        userArray.unshift(JSON.stringify(userData));
        localStorage.setItem("User Data", JSON.stringify(userArray));
        clearValues();
        // values.map((ele)=>ele=null)
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
        } else {
          alert("Your email already exists!!!Try with different email");
        

        }
      }
    }
  };
  return (
    <>
      <form id="registration-form">
        <div className="col-md-auto m-3 p-4 form-main">
          <h4 style={{ textAlign: "center" }}>Registration Form</h4>
          <div className="row mt-2" id="fullName">
            <div className=" ">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control "
                id="fullNameID"
                placeholder="Enter Full Name"
                name="fullName"
                onChange={valueChange}
              ></input>
              <div className="form-text d-none text-danger errorMessage">
                Enter your valid full name
              </div>
            </div>
          </div>
          <div className="row mt-2" id="email">
            <div className=" ">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailID"
                placeholder="Enter Email address"
                name="email"
                onChange={valueChange}
              ></input>
              <div className="form-text d-none text-danger errorMessage">
                Enter your valid email address
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6" id="mobile">
              <label className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="mobileID"
                placeholder="Enter Mobile Number"
                name="mobile"
                onChange={valueChange}
              ></input>
              <div className="form-text d-none text-danger errorMessage">
                Enter your valid mobile number
              </div>
            </div>
            <div className="col-md-6 dob" id="dob">
              <label className="form-label">Birth Date</label>
              <input
                type="date"
                className="form-control"
                id="dobID"
                name="dob"
                onChange={valueChange}
              ></input>
              <div className="form-text d-none text-danger errorMessage">
                Enter your date of birth
              </div>
            </div>
          </div>
          <div className="row mt-2" id="gender">
            <label className="form-label">Gender</label>
            <div className="col-md-auto ">
              <input
                type="radio"
                id="male"
                value="Male"
                name="gender"
                onChange={valueChange}
              />{" "}
              <label className="form-label" for="male" style={{cursor:"pointer"}}>Male</label>
            </div>
            <div className="col-md-auto ">
              <input
                type="radio"
                id="female"
                value="Female"
                name="gender"
                onChange={valueChange}
              />{" "}
              <label className="form-label" for="female" style={{cursor:"pointer"}}>Female</label>
            </div>
            <div className="col-md-auto ">
              <input
                type="radio"
                id="notToSay"
                value="Other"
                name="gender"
                onChange={valueChange}
              />{" "}
              <label className="form-label" for="notToSay" style={{cursor:"pointer"}}>Prefer not to say</label>
            </div>
            <div className="form-text d-none text-danger errorMessage">
              Pick one option
            </div>
          </div>
          <div className="row mt-2" id="address">
            <div className=" ">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Enter address"
                name="address"
                onChange={valueChange}
              ></input>
            </div>
            <div className="form-text d-none text-danger errorMessage">
              Enter your address
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 " id="country">
              <select
                name="country"
                className="form-control"
                onChange={valueChange}
              >
                <option value="Country" selected disabled>
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
              <div className="form-text d-none text-danger errorMessage">
                Select your country
              </div>
            </div>
            <div className="col-md-6 " id="postalCode">
              <input
                type="number"
                className="form-control"
                id="postalCodeID"
                placeholder="Enter postal code"
                name="postalCode"
                onChange={valueChange}
              ></input>
              <div className="form-text d-none text-danger errorMessage">
                Enter your postal address
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div>
              <button
                className="btn btn-primary form-control"
                onClick={onSubmit} id="submit"
              >
                Submit
              </button>
            
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
