// import * as React from "react";
// import {
//   Formik,
//   FormikHelpers,
//   FormikProps,
//   Form,
//   Field,
//   FieldProps,
// } from "formik";
// import { UserStateTy, login } from "./../../redux/slice/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// interface MyFormValues {
//   email: String;
//   userName: String;
// }
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const navigate = useNavigate();
// const dispatch = useDispatch();
//   const initialValues: MyFormValues = { email: "", userName: "" };
//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={(values, actions) => {
//           console.log(values);
//           dispatch(login(true));
//           axios.post("http://localhost:6060/login", values).then((res) => {
//             console.log(res);
// dispatch(login(true));
//             if ((res.status = 200)) {
//               navigate("/");
//             }
//           });
//         }}
//       >
//         <Form>
//           <label htmlFor="email">Email</label>
//           <Field id="email" name="email" placeholder="Email" />
//           <br />
//           <label htmlFor="userName">User Name</label>
//           <Field id="userName" name="userName" placeholder="EmuserNameail" />
//           <button type="submit">Login</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Login;

// import { Container } from "react-bootstrap";
// import "./Login.scss";
// import { FaHome } from "react-icons/fa";
// import * as Yup from "yup";
// import { Formik, Field, Form } from "formik";
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { UserStateTy, login } from "./../../redux/slice/userSlice";
// import { ToastContainer, toast } from "react-toastify";

// import axios from "axios";

// export default function LoginPage() {
//   const [users, setUsers] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:6060/users").then((res) => setUsers(res.data));
//   }, []);

//   return (
//     <div className="login">
//       {/* <ToastContainer /> */}

//       <div className="top">
//         <Container>
//           <div className="text">
//             <Link to={"/"}>
//               <FaHome /> Home
//             </Link>
//             <span>Login</span>
//           </div>
//         </Container>
//       </div>

//       <div className="login-section">
//         <Container>
//           <div className="login-form">
//             <h2>Login</h2>

//             <div>
//               <Formik
//                 initialValues={{
//                   username: "",
//                   password: "",
//                 }}
//                 // validationSchema={Login}
//                 validateOnBlur={false}
//                 validateOnChange={false}
//                 // validationSchema={Login}
//                 onSubmit={async (values) => {
//                   axios
//                     .post("http://localhost:6060/login", values)
//                     .then((res) => {
//                       dispatch(login(true));
//                       if ((res.status = 200)) {
//                         navigate("/");
//                       }
//                       users.forEach((element) => {
//                         if (element.userName === res.data.data.userName) {
//                           navigate("/");
//                           window.location.reload();
//                           console.log(res.data);
//                           localStorage.setItem("user", JSON.stringify(element));
//                           sessionStorage.setItem(
//                             "userlogin",
//                             JSON.stringify(true)
//                           );
//                         }
//                       });
//                     })
//                     .catch((error) => {
//                       if (error.response.status === 500) {
//                         alert("Not found");
//                       } else {
//                         alert(`${error.response.data.message}`);
//                       }
//                     });
//                 }}
//               >
//                 {/* {({ errors, touched }) => ( */}
//                 <Form>
//                   <div className="input">
//                     <label>Username *</label>
//                     <div className="input-username">
//                       <Field
//                         className="username"
//                         name="username"
//                         // style={
//                         //   errors.username &&
//                         //   touched.username && { borderColor: "red" }
//                         // }
//                       />
//                     </div>
//                   </div>
//                   {/* {errors.username && touched.username && (
//                       <div
//                         style={
//                           errors.username &&
//                           touched.username && {
//                             fontSize: "17px",
//                             color: "red",
//                             marginTop: "-20px",
//                           }
//                         }
//                       >
//                         {errors.username}
//                       </div>
//                     )} */}

//                   <div className="input">
//                     <label>Password *</label>
//                     <div
//                       className="inputpassword"
//                       // style={
//                       //   errors.password &&
//                       //   touched.password && { borderColor: "red" }
//                       // }
//                     >
//                       <Field
//                         className="password"
//                         name="password"
//                         type="password"
//                       />
//                     </div>
//                   </div>
//                   {/* {errors.password && touched.password && (
//                       <div
//                         style={
//                           errors.password &&
//                           touched.password && {
//                             fontSize: "17px",
//                             color: "red",
//                             marginTop: "-20px",
//                           }
//                         }
//                       >
//                         {errors.password}
//                       </div>
//                     )} */}
//                   <button type="submit">Sign In</button>
//                 </Form>
//                 {/* )} */}
//               </Formik>
//             </div>
//             <div className="switch-login">
//               <Link to={"/register"}> Or Create An Account</Link>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }
import { Container } from "react-bootstrap";
import "./Login.scss";
import { FaHome } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { UserStateTy, login } from "./../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

interface User {
  username: string;
  // Diğer kullanıcı özellikleri buraya eklenebilir
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:6060/users")
      .then((res: AxiosResponse<User[]>) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleLogin = (values: { username: string; password: string }) => {
    dispatch(login(true));

    axios
      .post("http://localhost:6060/login", values)
      .then((res) => {
        users.forEach((element) => {
          if (element.username === res.data.data.username) {
            console.log("tapdim");

            localStorage.setItem("user", JSON.stringify(element));
            sessionStorage.setItem("userlogin", JSON.stringify(true));
            navigate("/");
            window.location.reload();
            console.log(res.data);
          }
        });
        //   if (res && res.status === 200) {
        //     const foundUser = users.find(
        //       (element) => element.username === res.data.data.username
        //     );
        //     if (foundUser) {
        //       console.log(values);
        //       localStorage.setItem("user", JSON.stringify(foundUser));
        //       sessionStorage.setItem("userlogin", JSON.stringify(true));
        //       navigate("/");
        //       window.location.reload();
        //       console.log(res.data);
        //     }
        //     dispatch(login(true));
        //     navigate("/");
        //   }
      })
      .catch((error) => {
        if (error.res.status === 500) {
          alert("Not found");
        } else {
          alert(`${error.res.data.message}`);
        }
      });
  };

  return (
    <div className="login">
      <div className="top">
        <Container>
          <div className="text">
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
            <span>Login</span>
          </div>
        </Container>
      </div>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Login</h2>
            <div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                onSubmit={(values) => handleLogin(values)}
              >
                <Form>
                  <div className="input">
                    <label>Username *</label>
                    <div className="input-username">
                      <Field className="username" name="username" />
                    </div>
                  </div>

                  <div className="input">
                    <label>Password *</label>
                    <div className="inputpassword">
                      <Field
                        className="password"
                        name="password"
                        type="password"
                      />
                    </div>
                  </div>

                  <button type="submit">Sign In</button>
                </Form>
              </Formik>
            </div>

            <div className="switch-login">
              <Link to={"/register"}> Or Create An Account</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
