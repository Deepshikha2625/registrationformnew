import React from "react";
import Validation from "./Validation"; //userform
import AllValidation from "./AllValidation"; // validations
export default function registrationForm() {
  const { handleChange, values, handleSubmit, errors } =
    Validation(AllValidation);
  return (
    <>
      {/* Form container */}
      <fieldset className="container">
        <label className="title">Registration</label>
        <fieldset className="content">
          <form action="#" onSubmit={handleSubmit}>
            {/* User's Details */}
            <div className="user-details">
              <div className="input-box">
                <label htmlFor="fname" className="details">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fullname"
                  placeholder="Enter your name"
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <p className="errors">{errors.fullname}</p>}
              </div>

              <div className="input-box">
                <label htmlFor="username" className="details">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p className="errors">{errors.username}</p>}
              </div>

              <div className="input-box">
                <label htmlFor="email" className="details">
                  Email
                </label>
                <input
                  type="email"
                  size="30"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="errors">{errors.email}</p>}
              </div>

              <div className="input-box">
                <label htmlFor="phone" className="details">
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  title="123-456-7890"
                  id="phone"
                  name="phonenumber"
                  placeholder="Enter your number"
                  value={values.phonenumber}
                  onChange={handleChange}
                />

                {errors.phonenumber && (
                  <p className="errors">{errors.phonenumber}</p>
                )}
              </div>

              <div className="input-box">
                <label htmlFor="password" className="details">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="errors">{errors.password}</p>}
              </div>

              <div className="input-box">
                <label htmlFor="confirmpassword" className="details">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm your password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
                {errors.confirmpassword && (
                  <p className="errors">{errors.confirmpassword}</p>
                )}
              </div>
            </div>
            <fieldset
              className="gender-details"
              value={values.gender}
              onChange={handleChange}
            >
              <input type="radio" name="gender" id="male" />
              <input type="radio" name="gender" id="female" />
              <input type="radio" name="gender" id="prefer-not-say" />
              <label htmlFor="" className="gender-title" name="gender">
                Gender
              </label>
              <section className="category">
                <label>
                  <span className="dot one"></span>
                  <label className="gender" htmlFor="male" name="gender">
                    Male
                  </label>
                </label>
                <label>
                  <span className="dot two"></span>
                  <label className="gender" htmlFor="female" name="gender">
                    Female
                  </label>
                </label>
                <label>
                  <span className="dot three"></span>
                  <label
                    className="gender"
                    htmlFor="prefer-not-say"
                    name="gender"
                  >
                    Prefer not to say
                  </label>
                </label>
              </section>
              {errors.email && <p className="errors">{errors.gender}</p>}
            </fieldset>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </fieldset>
      </fieldset>
    </>
  );
}
