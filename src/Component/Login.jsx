import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "../Validation/FormValidation";
import { SiReactos } from "react-icons/si";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGooglePlusG, FaRegUser } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="login">
      <div className="ldiv">
        <div className="logo">
          <SiReactos />
          Reactos
        </div>
        <div className="welcome-txt">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="signin-btn">SIGN IN</button>
        </div>
      </div>
      <div className="rdiv">
        <h1 className="text-gradient">Create Account</h1>
        <div className="social-handles">
          <BiLogoFacebook className="social-handle-logo" />
          <FaGooglePlusG className="social-handle-logo" />
          <BiLogoLinkedin className="social-handle-logo" />
        </div>
        <p>or use your email for registration:</p>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
          className="form-container"
        >
          {({ errors, touched }) => (
            <Form className="form-container">
              <div className="form-fields">
                <FaRegUser />
                <Field
                  name="fullName"
                  placeholder="Name"
                  className="form-inputs"
                />
              </div>
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
              <div className="form-fields">
                <AiOutlineMail />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-inputs"
                />
              </div>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <div className="form-fields">
                <RiLockPasswordFill />
                <Field
                  name="password"
                  placeholder="Password"
                  className="form-inputs"
                  type="password"
                />
              </div>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit" className="signup-btn">
                SIGN UP
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div> 
  );
};

export default Login;
