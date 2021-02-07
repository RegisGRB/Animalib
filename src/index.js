import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import firebase from "./firebase";
import Router from "./layouts/Router";
import { ContextContainer } from "./context";
// import { Provider } from "react-redux";
// import { store } from "./Store/store";


ReactDOM.render(
  <React.StrictMode>
    {/* GRB TEMPLATE USE REDUCERS*/}
    {/* <Provider store={store}> */}
      <ContextContainer>
        <Router />
      </ContextContainer>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
/*              ->EDIT ANIMAL
                ->Edit USER -> SWITCH LANG & THEME
Sign -> Profile ->ADD ANIMAL
                ->Calendar -> ADD EVENTS
*/

// NOTIF FROM FIREBASE
const askForPermissioToReceiveNotifications = async () => {
  // firebase config ===> firebase.js
  try {
    const messaging = firebase.messaging(); 
    await messaging.requestPermission();
    const token = await messaging.getToken();
    // console.log('token FIREBASE:', token);
    return token;
  } catch (error) {
    console.error(error);
  }
}
askForPermissioToReceiveNotifications();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
