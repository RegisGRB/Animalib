import React from "react";
import Router from "./Router";
import '../App.scss';
import {ContextContainer}  from "../context";
import {Provider} from "react-redux";
import {store} from "../Store/store";
const App = () => {
  return (
    <Provider store={store}>
    <ContextContainer>
      <Router />
    </ContextContainer>
    </Provider>
  );
};
export default App;
