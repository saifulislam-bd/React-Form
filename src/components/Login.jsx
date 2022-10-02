import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SignImage from "./SignImage";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inputVal, setInputval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getValue = (e) => {
    const { value, name } = e.target;

    setInputval(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };
  const submitData = (e) => {
    e.preventDefault();

    const getUserData = localStorage.getItem("usersData");

    const { email, password } = inputVal;

    // validation check
    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Valid Email is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password must be at least 5 characters long");
    } else {
      if (getUserData && getUserData.length) {
        const userData = JSON.parse(getUserData);
        const userLogin = userData.filter((elem, idx) => {
          return elem.email === email && elem.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid details");
        } else {
          console.log("User login successful");
          localStorage.setItem("userLogin", JSON.stringify(userLogin));
          history("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getValue}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={getValue}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                className="col-lg-6"
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#43b97f" }}
                onClick={submitData}
              >
                Sign In
              </Button>
            </Form>

            <p className="mt-3">
              Don't have an account?
              <span>
                <NavLink to={"/"}>Sign Up</NavLink>
              </span>
            </p>
          </div>
          <SignImage />
        </section>
      </div>
    </>
  );
};

export default Login;
