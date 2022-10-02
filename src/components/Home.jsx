import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SignImage from "./SignImage";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputVal, setInputval] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, email, date, password } = inputVal;

    // validation check
    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Valid Email is required");
    } else if (date === "") {
      alert("Date field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password must be at least 5 characters long");
    } else {
      localStorage.setItem("usersData", JSON.stringify([...data, inputVal]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getValue}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getValue}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control onChange={getValue} type="date" name="date" />
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
                Sign Up
              </Button>
            </Form>

            <p className="mt-3">
              Already have an account?
              <span>
                <NavLink to={"/login"}>Sign In</NavLink>
              </span>
            </p>
          </div>
          <SignImage />
        </section>
      </div>
    </>
  );
};

export default Home;
