// import * as React from "react";
// import {
//   Formik,
//   FormikHelpers,
//   FormikProps,
//   Form,
//   Field,
//   FieldProps,
// } from "formik";
// import axios from "axios";
// interface MyFormValues {
//   email: String;
//   userName: String;
// }
// import { useNavigate } from "react-router-dom";

// const Regsiter = () => {
//   const navigate = useNavigate();
//   const initialValues: MyFormValues = { email: "", userName: "" };

//   return (
//     <div>
//       <h1>Register</h1>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={(values, actions) => {
//           console.log(values);
//           axios
//             .post("http://localhost:6060/users/", {
//               username: values.userName,
//               email: values.email,
//             })
//             .then((res) => {
//               console.log(res);
//               if (res.status == 201) {
//                 alert("bu email artiq qeydiyyatdan kecib");
//               }
//               if ((res.status = 200)) {
//                 alert("qeydiyyat ugurla tamamlandi");
//                 navigate("/login");
//               }
//             });
//           //   alert(JSON.stringify(values, null, 2));
//           //   actions.setSubmitting(false);
//         }}
//       >
//         <Form>
//           <label htmlFor="email">Email</label>
//           <Field id="email" name="email" placeholder="Email" />
//           <br />
//           <label htmlFor="userName">User Name</label>
//           <Field id="userName" name="userName" placeholder="EmuserNameail" />
//           <button type="submit">Register</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Regsiter;

// import { Helmet } from "react-helmet";

import { Container } from "react-bootstrap";
import "./Register.scss";
import { FaHome } from "react-icons/fa";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { ref } from "yup";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// const Login = Yup.object().shape({
//   email: Yup.string()
//     .required("Please enter email")
//     .matches(
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       "Please enter correct email or username!"
//     ),
//   userName: Yup.string().required("Please enter username"),
//   password: Yup.string().required("Please enter password"),
//   confirm_password: Yup.string()
//     .required("Please confirm your password")
//     .oneOf([ref("password")], "Passwords do not match"),
// });

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      {/* <ToastContainer /> */}

      <div className="top">
        <Container>
          <div className="text">
            <Link to="/">
              <FaHome /> Home
            </Link>
            <span>Register</span>
          </div>
        </Container>
      </div>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Register</h2>

            <Formik
              initialValues={{
                email: "",
                userName: "",
                password: "",
                confirm_password: "",
              }}
              // validationSchema={Login}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={async (values, { resetForm }) => {
                console.log("salam");

                axios
                  .post("http://localhost:6060/users/", {
                    username: values.userName,
                    email: values.email,
                    password: values.password,
                  })
                  .then((res) => {
                    console.log(res);
                    if (res.status == 201) {
                      alert("bu email artiq qeydiyyatdan kecib");
                    }
                    if ((res.status = 200)) {
                      alert("You already have an account!");
                      navigate("/login");
                    }
                  });
                resetForm();

                navigate("/login");
              }}
            >
              {/* {({ errors, touched }) => ( */}
              <Form>
                <div className="input">
                  <label>Email address *</label>
                  <Field
                    className="username"
                    name="email"
                    // style={
                    //   errors.email && touched.email && { borderColor: "red" }
                    // }
                  />
                </div>
                {/* {errors.email && touched.email && (
                    <div
                      style={
                        errors.email &&
                        touched.email && {
                          fontSize: "17px",
                          color: "red",
                          marginTop: "-20px",
                        }
                      }
                    >
                      {errors.email}
                    </div>
                  )} */}

                <div className="input">
                  <label>Username *</label>
                  <Field
                    className="username"
                    name="userName"
                    // style={
                    //   errors.userName &&
                    //   touched.userName && { borderColor: "red" }
                    // }
                  />
                </div>
                {/* {errors.userName && touched.userName && (
                    <div
                      style={
                        errors.userName &&
                        touched.userName && {
                          fontSize: "17px",
                          color: "red",
                          marginTop: "-20px",
                        }
                      }
                    >
                      {errors.userName}
                    </div>
                  )} */}

                <div className="input">
                  <label>Password *</label>
                  <div
                    className="inputpassword"
                    // style={
                    //   errors.password &&
                    //   touched.password && { borderColor: "red" }
                    // }
                  >
                    <Field
                      className="password"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                {/* {errors.password && touched.password && (
                    <div
                      style={
                        errors.password &&
                        touched.password && {
                          fontSize: "17px",
                          color: "red",
                          marginTop: "-20px",
                        }
                      }
                    >
                      {errors.password}
                    </div>
                  )} */}

                <button type="submit">Sign In</button>
              </Form>
              {/* )} */}
            </Formik>
            <div className="switch-login">
              <Link to="/login"> Or Login</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RegisterPage;
