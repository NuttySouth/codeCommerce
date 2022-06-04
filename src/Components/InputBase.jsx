import React from "react";

function InputBase(props) {
  const {placeHolder} = props
  return (
    <React.Fragment>
      <label htmlFor="">
       <p> {placeHolder} </p>
        <input {...props}></input>
      </label>
    </React.Fragment>
  );
}

export default InputBase;
