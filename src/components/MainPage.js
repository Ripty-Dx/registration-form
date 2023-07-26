import React from "react";
import "./MainPage.css";
import Form from "./Form";
const MainPage = () => {
  return (
    <>
      <div className="main container-fluid">
        <div className="col-md-6 d-flex justify-content-center align-items-centers">
          <div className="main-text-border"></div>
          <h1 className="text-light main-text">
            Registration <br></br> Form
          </h1>
        </div>
        
        <div className="col-md-5">
         <Form/>
        </div>
        <div className="col-md-1"></div>

      </div>
    </>
  );
};

export default MainPage;
