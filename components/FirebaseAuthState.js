/**
 * create a component that will keep track of user's auth state
 * then wrap _app.js so that entire app knows if the user is logged in or not
 */

 import React, { useEffect, useContext } from "react";
    import firebase from "../firebase";
    import { Context } from "../context";
    import { axiosAuth } from "../actions/axios";
    import { setCookie, destroyCookie } from "nookies";
     
    // this component is responsible to keep the current user in context
    // then user info is accessible for the entire app
    // you can build protected routes etc based on that...
    const FirebaseAuthState = ({ children }) => {
      const { dispatch } = useContext(Context);
     
      useEffect(() => {
        // console.log("firebase auth state from context", state);
        return firebase.auth().onIdTokenChanged(async (user) => {
          if (!user) {
            dispatch({
              type: "LOGOUT",
            });
     
            destroyCookie(null, "token");
            setCookie(null, "token", "", {});
            return;
          } else {
            // console.log("FIREBASE_AUTH_STATE_FIREBASE_USER", user);
            // set token in cookie for use in getServerSideProps
            const token = await user.getIdToken();
            destroyCookie(null, "token");
            setCookie(null, "token", token, {});
            // get user info from backend, not firebase
            axiosAuth.post(`/current-user`).then((res) => {
              // console.log("USER ROUTE RES IN FIREBASE_AUTH_STATE", res);
              dispatch({
                type: "LOGIN",
                payload: res.data,
              });
            });
          }
        });
      }, []);
     
      // force refresh the token every 10 minutes
      useEffect(() => {
        const handle = setInterval(async () => {
          console.log(`refreshing token...`);
          const user = firebase.auth().currentUser;
          if (user) {
            const token = await user.getIdToken(true);
            destroyCookie(null, "token");
            setCookie(null, "token", token, {});
            // get user info from backend, not firebase
            axiosAuth.post(`/current-user`).then((res) => {
              // console.log("USER ROUTE RES IN FIREBASE_AUTH_STATE", res);
              dispatch({
                type: "LOGIN",
                payload: res.data,
              });
            });
          }
        }, 10 * 60 * 1000);
     
        return () => clearInterval(handle);
      }, []);
     
      return <>{children}</>;
    };
     
    export default FirebaseAuthState;

