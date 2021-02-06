import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Form from "../../components/ui/Form/Form";
import styled from "styled-components";
import perro from "../../assets/icon/Animal Solid/PNG/240 x 240/toucan, beak, parrot.png";
import { useHistory } from "react-router-dom";
import Auth from "../../utils/Auth";
import { AuthService } from "../../services";

const AniForm = () => {
  let history = useHistory();
  const [TypeForm, setTypeForm] = React.useState(true); // type form true login false register

  const handleLogin = (data) => {
    // action faites avec la data de retour du formulaire LOGIN
    AuthService.login(data);
    history.push("/Profile");
  };
  const RegisterAction = () => {}; // action faites avec la data de retour du formulaire REGISTER
  return (
    <>
      <SignLogo src={perro}></SignLogo>
      {/* block Login */}
          <FormContainer
            variants={variantForm}
            animate={TypeForm ? "show" : "initial"}
          >
            <SignTitle>Welcome Back</SignTitle>
            <Form
              className="AniForm"
              Fields={LoginField}
              Action={handleLogin}
            ></Form>
          </FormContainer>
            {/* block register */}
          <FormContainer
            variants={variantForm}
            animate={TypeForm ? "exit" : "show"}
          >
            <SignTitle>Welcome to Animalib</SignTitle>
            <Form className="AniForm" Fields={RegisterField}></Form>
          </FormContainer>
      {/* Switch apparition de l'un ou de l'autre */}
      <StyledButtonSwitch
        onClick={() => {
          setTypeForm(!TypeForm);
        }}
      >
        {TypeForm ? "Sign In" : "Sign Up"}
      </StyledButtonSwitch>
    </>
  );
};
const LoginField = {
  // Login Fields
  LEmail: {
    type: "Email",
    placeholder: "Email",
    value: "",
    required: true,
  },
  LPassword: {
    type: "Password",
    placeholder: "Password",
    value: "",
  },
  LSubmit: {
    type: "Submit",
    value: "Login",
  },
};
const RegisterField = {
  // Register Fields
  RFirstName: {
    type: "text",
    placeholder: "FirstName",
    value: "",
  },
  RLastName: {
    type: "text",
    placeholder: "LastName",
    value: "",
  },
  RPassword: {
    type: "Password",
    placeholder: "Password",
    value: "",
  },
  REmail: {
    type: "Email",
    placeholder: "Email",
    value: "",
    required: true,
  },
  RSubmit: {
    type: "Submit",
    value: "Register",
  },
};
// Animation d'entrer et sorti du modal
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
const variantForm = {
  initial: { x: "100vh", transition },
  show: { x: 0, transition },
  exit: { x: "-100vh", transition },
};

const FormContainer = styled(motion.div)`
  position: absolute;
`;
const SignTitle = styled.h1`
  margin-bottom: 10%;
  font-size: 1.5rem;
`;
const SignLogo = styled.img`
  width: 50%;
  filter: brightness(0.5);
`;

const StyledButtonSwitch = styled.span`
  position: absolute;
  bottom: 25%;
  right: 30%;
  color: ${(props) => props.theme.colors.third};
  cursor: pointer;
`;

export default AniForm;
