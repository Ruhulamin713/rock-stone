import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleEror] =
    useSignInWithGoogle(auth);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passWordRef = useRef("");
  const handleRegisterInput = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passWordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <div>
      <h2 className="text-center">Register</h2>
      <Form className="w-50 mx-auto" onSubmit={handleRegisterInput}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passWordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-50 d-block mx-auto "
        >
          Submit
        </Button>
        <div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Please Login</Link>
            </span>
          </p>
        </div>
      </Form>
      <div className="mx-auto d-flex w-50 align-items-center justify-content-center">
        <div className="w-50 border-bottom border-secondary"></div>
        <p className="mt-2 px-4">or</p>
        <div className="w-50 border-bottom border-secondary"></div>
      </div>
      <div>
        <Button
          className="d-block w-25 mx-auto"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
