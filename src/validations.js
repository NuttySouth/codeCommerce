const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ZIPCODE_REGEX = /^\b\d{5}(-\d{4})?\b$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export function validateTextOnly(value){
  if(value){
    return value && /^[a-zA-Z ]*$/i.test(value)? "" : "Enter Alphabetical Characters Only";
    }
  return "Please fill this field";
}

export function validateEmail(value){  
  if(value){
    return EMAIL_REGEX.test(value) ? "" : "Enter a valid email address";
  }
  return "Enter Valid email Address";
}

export function validatePassword(value){
  if(value){
    return PASSWORD_REGEX.test(value) ? "" : "Enter a valid password";
  }
  return "Enter a valid password";
}

export function validateZipCode(value){
  if(value){
    return ZIPCODE_REGEX.test(value) ? "" : "Enter Valid Zip Code";
  }
  return "Enter Valid Zip Code";
}
