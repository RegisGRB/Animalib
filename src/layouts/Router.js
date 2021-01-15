import React from "react";
import { BrowserRouter , Route ,Switch} from "react-router-dom";
import * as Pages from "../pages";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "../components/ui/ProtectedRoute/ProtectedRoute";

const Router = () => {
const routes = [
    {
      path: "/FaceGame",
      component: Pages.FaceGame,
    },
    {
      path: "/Todo",
      component: Pages.Todo,
    }
  ];
  return (
    <BrowserRouter>
        {/* <Header/> */}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              {routes.map((route) => (
                <ProtectedRoute
                exact 
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  protectedRoute={route.protectedRoute}
                />
              ))}
            
            </Switch>
            </AnimatePresence>
          )}
        />
    </BrowserRouter>
  );
};
export default Router;