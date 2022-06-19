import React from "react";
import { useState } from "react";
import AllValidation from "./AllValidation";
export default function Validation(AllValidation) {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(AllValidation(values));
    setIsSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors };
}
