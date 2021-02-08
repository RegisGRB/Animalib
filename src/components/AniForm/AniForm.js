import React from "react";
import { motion } from "framer-motion";
import Form from "../../components/ui/Form/Form";
import styled from "styled-components";
import perro from "../../assets/icon/Animal Solid/PNG/240 x 240/toucan, beak, parrot.png";
import { useHistory } from "react-router-dom";
import { AuthService } from "../../services";
import {LangContext} from "../../context";
import { isLoggedIn } from "../../utils/Auth";
import SpanText from "../elements/SpanText";
const AniForm = () => {
  const LangContextx = React.useContext(LangContext);
  const [Error,setError] = React.useState(false);
  let history = useHistory();
  const [TypeForm, setTypeForm] = React.useState(true); // type form true login false register

  const handleLogin = (data) => {
    // action faites avec la data de retour du formulaire LOGIN
    console.log(AuthService.login(data));
    if(isLoggedIn()){
    history.push("/Profile");
    }else{
      setError(true);
    }
  };

  const RegisterAction = (data) => {
    // action faites avec la data de retour du formulaire REGISTER
    AuthService.register(data);
    if(isLoggedIn()){
    history.push("/Profile");
    }else{
      setError(true);
    }
  };

  return (
      <>
        <SignLogo src={perro}></SignLogo>
        {/* block Login */}
            <FormContainer
              variants={variantForm}
              animate={TypeForm ? "show" : "initial"}
            >
              <SignTitle as="h1" Error={Error}>{Error ? LangContextx.ErrorLogin : LangContextx.SignAniFormLoginTitle}</SignTitle>
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
              <SignTitle as="h1" Error={Error}>{Error ? LangContextx.ErrorRegister : (LangContextx.SignAniFormRegisterTitle +" "+ LangContextx.Title)}</SignTitle>
              <Form className="AniForm" Fields={RegisterField} Action={RegisterAction}></Form>
            </FormContainer>
        {/* Switch apparition de l'un ou de l'autre */}
        <StyledButtonSwitch
          onClick={() => {
            setTypeForm(!TypeForm);
          }}
        >
          {TypeForm ? LangContextx.SignIn : LangContextx.SignUp}
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
const SignTitle = styled(SpanText)`
  margin-bottom: 10%;
  font-size: 1.5rem;
  color:${(props) => props.Error ? "red" : ""}
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
