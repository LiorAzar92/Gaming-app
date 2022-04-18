import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
import FormRow from "../components/FormRow";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  repeat: "",
  isMember: true,
};

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  // const {user, isLoading, showAlert, displayAlert, setUpUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, repeat, isMember } = values;
    if (
      !isMember &&
      (!email || !password || password !== repeat || (!isMember && !name))
    ) {
      // displayAlert();
      return;
    }
    const currentUser = { name, email, password };

    // if (isMember) {
    //   setUpUser({
    //     currentUser,
    //     endPoint: "login",
    //     alertText: "Login Successful! Redirecting...",
    //   });
    // } else {
    //   setUpUser({
    //     currentUser,
    //     endPoint: "register",
    //     alertText: "User Created! Redirecting...",
    //   });
    // }
  };

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   }
  // }, [user, navigate]);

  return (
    <form className="App " onSubmit={onSubmit}>
      <div className="card">
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* {showAlert && <Alert />} */}

        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {!values.isMember && (
          <FormRow
            type="password"
            name="repeat"
            value={values.repeat}
            handleChange={handleChange}
          />
        )}

        <button
          type="submit"
          className="btn btn-block" /*disabled={isLoading}*/
        >
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </form>
  );
}
