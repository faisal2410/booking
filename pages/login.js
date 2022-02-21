import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { toast } from "react-toastify";
import { Button } from "antd";
import { GoogleOutlined, SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("abdurrahmantalha331@gmail.com");
  const [loginPass, setLoginPass] = useState("MArt@msb2020");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const register = async () => {
    // console.log(registerEmail, registerPass);
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPass)
      .then((user) => {
        router.push('/')
        console.log("REGISTER", user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
        setLoading(false);
      });
  };

  const login = async () => {
    // console.log(loginEmail, loginPass);
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPass)
      .then((user) => {
        router.push('/')
        console.log("LOGIN", user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
        setLoading(false);
      });
  };

  const googleLogin = async () => {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        router.push('/')
        console.log("LOGIN", user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  return (
    <div className="container">
    <div className="row d-flex justify-content-center ">
    <div className="col-md-12 ">
      <h2 className="text-center pt-4 display-4">
      {loading ? (
          <SyncOutlined spin className="text-danger" />
        ) : (
          "Login / Register"
        )}
       </h2>
      <div className="row">
      <div className="col-md-6 mx-auto">
      <Button
        onClick={googleLogin}
        className="mb-3"
        type="danger"
        shape="round"
        icon={<GoogleOutlined />}
        size="large"
        block
      >
        Login with Google
      </Button>
      </div>
    
      </div>
     
      <div className="row">
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          pass={loginPass}
          setPass={setLoginPass}
          handleSubmit={login}
          buttonName="Login"
        />

        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          pass={registerPass}
          setPass={setRegisterPass}
          handleSubmit={register}
          buttonName="Register"
        />
      </div>
      <div className="row">
      <div className="col-md-6 offset-md-3 ">
      <div className="d-grid">
        <Link href="/reset-password">
          <a className="btn btn-outline-danger btn-sm mt-5">Reset Password</a>
        </Link>
      </div>
      </div>
     
      </div>
     
      </div>
      </div>
    </div>
  );
};

export default Login;
