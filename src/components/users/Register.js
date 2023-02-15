import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FlashMessage from "../../FlashMessage";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [validation, setValidation] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    let valid = {};

    if(!user.name) {
      valid.name = "name field is required";
    } else {
      valid.name = "";
    }

    if(!user.email) {
      valid.email = "email field is required";
    } else {
      valid.email = "";
    }

    if(!user.password) {
      valid.password = "password filed is required";
    } else {
      valid.password = "";
    }
  
    if(valid.name === "" && valid.email === "" && valid.password === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setValidation({...validation, ...valid});
  }

  useEffect(() => {
    isSubmit && checkValidation();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
    checkValidation();

    if(isValid) {
      let data = {
        name: user.name,
        email: user.email,
        password: user.password
      };

      axios.post('http://127.0.0.1:8000/api/register', data)
        .then((res) => {
          if(res.status === 200) {
            <FlashMessage type="success" />

            setUser({
              name: '',
              email: '',
              password: ''
            });
          }
        })
        .catch((err) => console.dir(err));
      }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) => handleInput(e)}
            />
            { validation.name && <p style={{color: "red"}}>{validation.email}</p> }
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => handleInput(e)}
            />
            { validation.email && <p style={{color: "red"}}>{validation.email}</p> }
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={user.password}
              onChange={(e) => handleInput(e)}
            />
            { validation.password && <p style={{color: "red"}}>{validation.password}</p> }
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-center">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;