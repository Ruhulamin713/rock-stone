import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const emailRef = useRef("");
  const passWordRef = useRef("");

  const handleLoginInput = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passWordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  let errorMessage;
  if (error || googleError) {
    errorMessage = (
      <p className="text-danger">
        {error?.message}
        {googleError?.message}{" "}
      </p>
    );
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div>
      <h2 className="text-center">Login</h2>
      <Form className="w-50 mx-auto" onSubmit={handleLoginInput}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passWordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        {errorMessage}
        <Button
          variant="primary"
          type="submit"
          className="w-50 d-block mx-auto "
        >
          Submit
        </Button>
        <div>
          <p>
            Not Registered?{" "}
            <span>
              <Link to="/register" className="text-decoration-none">
                Please register
              </Link>
            </span>
          </p>
          <p>
            Forget Password?{" "}
            <button
              className="btn btn-link text-primary pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </button>{" "}
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
      <ToastContainer />
    </div>
  );
};

export default Login;
