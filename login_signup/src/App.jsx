import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function App() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateUsername = (username) => {
    return username.length >= 5;
  };

  const validatePhone = (phone) => {
    return phone.length >= 11;
  };

  const validatePassword = (password) => {
    // Regular expression to validate password format (minimum 7 characters with at least one capital letter and one number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username
    if (!validateUsername(username)) {
      setUsernameError("Username must be at least 5 characters");
      return;
    } else {
      setUsernameError("");
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      setPhoneError("Phone number must be at least 11 digits");
      return;
    } else {
      setPhoneError("");
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 7 characters with one capital letter and one number"
      );
      return;
    } else {
      setPasswordError("");
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setConfirmPasswordError("");
    }

    // If all validations pass, proceed with registration
    // Here you can perform your registration logic
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="username"
              type="text"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <div className="text-danger">{usernameError}</div>
            )}

            <MDBInput
              wrapperClass="mb-4"
              label="Phone"
              id="phone"
              type="tel"
              size="lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}

            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <div className="text-danger">{passwordError}</div>
            )}

            <MDBInput
              wrapperClass="mb-4"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              size="lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <div className="text-danger">{confirmPasswordError}</div>
            )}

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                Register
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Already have an account?{" "}
                <a href="#!" className="link-danger">
                  Login
                </a>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: "white" }}>
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: "white" }}>
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: "white" }}>
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>
          <MDBBtn tag="a" color="none" className="mx-3" style={{ color: "white" }}>
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
