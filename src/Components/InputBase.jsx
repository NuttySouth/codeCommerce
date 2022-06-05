import React from "react";

function InputBase(props) {
  const {placeHolder, errorMessage} = props
  return (
    <React.Fragment>
      <label htmlFor="">
       <p> {placeHolder} </p>
        <input {...props}></input>
        {errorMessage && <p>{errorMessage}</p>}
      </label>
    </React.Fragment>
  );
}

export default InputBase;
