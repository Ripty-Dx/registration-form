import React from "react";
import "./MainPage.css";
import Form from "./Form";
const MainPage = () => {
  return (
    <>
      <div className="main container-fluid m-auto" >
        <div className="col-lg-6 col-md-1 d-flex justify-content-center align-items-center">
          <div className="main-text-border"></div>
          <h1 className="text-light main-text">
            Registration <br></br> Form
          </h1>
        </div>
        
        <div className="col-md-10 col-lg-6">
         <Form/>
        </div>
        <div className="col-lg-1 col-md-1"></div>

      </div>
    </>
  );
};

export default MainPage;
