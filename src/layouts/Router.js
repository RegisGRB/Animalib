import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as Pages from "../pages";
import { AnimatePresence } from "framer-motion";
// import NavBar from "../components/ui/NavBar/NavBar";
import { AiOutlineProfile } from "react-icons/ai";

const Router = () => {
  const routes = [
    {
      // page de login
      path: "/",
      component: Pages.Sign,
      protectedRoute: false,
      nav: {
        show: false,
        icon: <></>,
        name: "Sign",
      },
    },
    {
      // page des différents animaux
      path: "/Profile",
      component: Pages.Profile,
      protectedRoute: true,
      nav: {
        show: true,
        icon: <AiOutlineProfile />,
        name: "Profile",
      },
    },
    {
      // AnimalPlate Intervention sur l'animal
      path: "/OverView/:id",
      component: Pages.OverView,
      protectedRoute: true,
      nav: {
        show: false,
        icon: <AiOutlineProfile />,
        name: "OverView",
      },
    },
    {
      // AnimalPlate Intervention sur l'animal
      path: "/EditUser/:id",
      component: Pages.EditUser,
      protectedRoute: true,
      nav: {
        show: false,
        icon: <AiOutlineProfile />,
        name: "OverView",
      },
    },
    {
      // AnimalPlate Intervention sur l'animal
      path: "/AddAnimal",
      component: Pages.AddAnimal,
      protectedRoute: true,
      nav: {
        show: false,
        icon: <AiOutlineProfile />,
        name: "OverView",
      },
    },
    {
      // AnimalPlate Edit de l'animal
      path: "/EditAnimal/:id",
      component: Pages.EditAnimal,
      protectedRoute: true,
      nav: {
        show: false,
        icon: <AiOutlineProfile />,
        name: "EditAnimal",
      },
    },
    {
      // AnimalPlate Edit de l'animal
      path: "/Calendar",
      component: Pages.Calendar,
      protectedRoute: true,
      nav: {
        show: false,
        icon: <AiOutlineProfile />,
        name: "OverView",
      },
    },
  ];

  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <>
            {/* <NavBar routes={routes} location={location}></NavBar> */}
            {/* Si besoin de navbar dynamic web et mobile*/}
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              <Switch location={location} key={location.pathname}>
                {routes.map((route) =>
                  route.protectedRoute === true &&
                  !localStorage.getItem("token") ? (
                    <Redirect to="/"></Redirect>
                  ) : (
                    <Route
                      exact
                      key={route.path}
                      path={route.path}
                      component={route.component}
                      protectedRoute={route.protectedRoute}
                    />
                  )
                )}
              </Switch>
            </AnimatePresence>
          </>
        )}
      />
    </BrowserRouter>
  );
};
export default Router;
