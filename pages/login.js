import firebase from "../firebase.js";
// import 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { toast } from "react-toastify";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("abdurrahmantalha331@gmail.com");
  const [loginPass, setLoginPass] = useState("MArt@msb2020");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const register = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPass)
      .then((user) => {
        console.log("REGISTER", user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };
  const login = async () => {
    // console.log(loginEmail,loginPass)
    signInWithEmailAndPassword(auth, loginEmail, loginPass)
      .then((user) => {
        console.log("Login", user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  const googleLogin= async()=>{
   await signInWithPopup(auth, provider)
   .then((user) => {
    console.log("Login", user);
  })
  .catch((err) => {
    console.log(err);
    toast(err.message);
  });
  }

  return (
    <div className="container">
    <div className="row">
    <div className="col-md-12">

   
      <h2 className="text-center pt-4 display-4"> Login / Resister </h2>
      <Button
          onClick={googleLogin}
          className="mb-3 w-50 offset-md-3"
          type="danger"
          shape="round"
          block
          size="large"
          icon={<GoogleOutlined />}
        >
          Login with Google
        </Button>
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
      </div>
      </div>
    </div>
  );
};

export default Login;
