import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Form from "../../components/ui/Form/Form";
import styled from "styled-components";
import { initialize } from "workbox-google-analytics";
import { helpers } from "../../utils";
import "./AniForm.scss";
import { StyledButton } from "../StyledComponents";
//https://cdn.dribbble.com/users/692322/screenshots/3991441/aroma-8-6.png
const AniForm = () => {
  const [TypeForm, setTypeForm] = React.useState(true);
  const LoginField = {
    Email: {
      type: "Email",
      placeholder: "Email",
      value: "",
      required: true,
    },
    Password: {
      type: "Password",
      placeholder: "Password",
      value: "",
    },
    Submit: {
      type: "Submit",
      value: "Login",
    },
  };
  const RegisterField = {
    FirstName: {
      type: "text",
      placeholder: "FirstName",
      value: "",
    },
    LastName: {
      type: "text",
      placeholder: "LastName",
      value: "",
    },
    Password: {
      type: "Password",
      placeholder: "Password",
      value: "",
    },
    Email: {
      type: "Email",
      placeholder: "Email",
      value: "",
      required: true,
    },
    Submit: {
      type: "Submit",
      value: "Register",
    },
  };
  const LoginAction = () => {};
  const RegisterAction = () => {};
  return (
    <>
      <AnimatePresence >
        {TypeForm ? (
          <FormContainer variants={variantForm} initial="initial" animate="animate" exit="exit">
            <Form className="AniForm" Fields={LoginField}></Form>
          </FormContainer>
        ) : (
          <FormContainer variants={variantForm} initial="initial" animate="animate" exit="exit" >
            <Form className="AniForm" Fields={RegisterField}></Form>
          </FormContainer>
        )}
      </AnimatePresence>
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
const variantForm = {
    initial : {opacity:0},
    animate: {opacity:1},
    exit: { opacity:0,transition:{duration:2000} }
}
const FormContainer = styled(motion.div)``;
const StyledButtonSwitch = styled.span`
position: absolute;
bottom: 25%;
right: 30%;
color:${(props) => props.theme.colors.third};
`;


export default AniForm;
