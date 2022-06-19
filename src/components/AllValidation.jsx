import React from "react";
export default function AllValidation(values) {
  let errors = {};
  if (!values.fullname.trim()) {
    errors.fullname = "Full Name required";
  }
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone Number is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 character or more";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Passwords do no match";
  }
  if (!values.gender) {
    errors.gender = "Gender required";
  }
  return errors;
}
