import React, { useState } from "react";
import InputBase from "./InputBase";
import {validateTextOnly, validateEmail, validatePassword, validateZipCode} from "../validations"

function RegistrationFormComponent() {

  const [userData, setUserData] = useState(
    {
      firstName: "",
      surName: "",
      email: "",
      password: "",
      passwordVer: "",
      zipCode: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleValidations = (type, value) => {
    let errorText; 
    switch(type){
      case "firstName":
        errorText = validateTextOnly(value);
        setErrors((prevState)=>{
          return {
            ...prevState,
            firstNameError: errorText,
          }
        })
      break;

      case "surName":
        errorText = validateTextOnly(value);
        setErrors((prevState)=>{
          return {
            ...prevState,
            surNameError: errorText,
          }
        })
      break;

      case "email":
        errorText = validateEmail(value);
        setErrors((prevState)=>{
          return {
            ...prevState,
            emailError: errorText,
          }
        })
      break;

      case "password":
        errorText = validatePassword(value);
        setErrors((prevState)=>{
          return {
            ...prevState,
            passwordError: errorText,
          }
        })
      break;

      case "passwordVer":
        errorText = (userData.password.length > 1 && value === userData.password) ? "" : "Passwords must match";
        setErrors((prevState)=>{
          return {
            ...prevState,
            passwordVerError: errorText,
          }
        });
      break;

      case "zipCode":
        errorText = validateZipCode(value);
        setErrors((prevState)=>{
          return {
            ...prevState,
            zipCodeError: errorText,
          }
        });
      break;
    }
  };

  const handleBlur = (e) => {
    handleValidations(e.target.name, e.target.value);
    console.log("triggered");
  }

  const handleInputData = (e) => {
    setUserData((prevState)=>{
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    });
  };

  const data = [
    {
      key:1,
      name: "firstName",
      placeHolder: "First Name",
      type: "text",
      errorMessage: "firstNameError",
    },
    {
      key:2,
      name: "surName",
      placeHolder: "Sur Name",
      type: "text",
      errorMessage: "surNameError",
    },
    {
      key:3,
      name: "email",
      placeHolder: "Email",
      type: "email",
      errorMessage: "emailError",
    },
    {
      key:4,
      name: "password",
      placeHolder: "Password",
      type: "text",
      errorMessage: "passwordError",
    },
    {
      key:5,
      name: "passwordVer",
      placeHolder: "Verify Password",
      type: "text",
      errorMessage: "passwordVerError",
    },
  ];

  return (
    <React.Fragment>
      <h2>Register</h2>
      <form>
        {data.length ? data.map((item)=>{
          return (
            <InputBase key={item.key} 
              type={item.type} 
              placeHolder={item.placeHolder} 
              name={item.name}
              value={userData && userData[item.name]}
              onChange={handleInputData}
              onBlur={handleBlur}
              errorMessage = {errors[item.errorMessage]} //need to check if this is the correct way to check for object property
              />
                  )
        }): null}
      </form>
    </React.Fragment>
  );
}

export default RegistrationFormComponent;
