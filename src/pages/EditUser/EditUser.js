import React from "react";
import { AiOutlineEdit,AiOutlineRollback } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import Form from "../../components/ui/Form/Form";
import * as AnimalItem from "../../components/elements/AnimalItem";
import { useHistory } from "react-router-dom";
import {LangContext} from "../../context";
import ThemeSwitcher from "../../components/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../components/ui/LangSwitcher/LangSwitcher";
import Auth from "../../utils/Auth";
import {AuthService} from "../../services";

const EditUser = () => {
  const LangContextx = React.useContext(LangContext);
  let history = useHistory();
  const user = Auth.getUser();

  const handleSave = (data) => {
    // action faites avec la data de retour du formulaire LOGIN
    AuthService.update(data);
  };

  const AnimalFields = {
  // Login Fields
  RFirstName: {
    type: "text",
    placeholder: LangContextx.FirstName,
    value: user.firstname,
  },
  RLastName: {
    type: "text",
    placeholder: LangContextx.LastName,
    value: user.lastname,
  },
  RPassword: {
    type: "Password",
    placeholder: LangContextx.Password,
    value: "",
  },
  REmail: {
    type: "Email",
    placeholder: LangContextx.Email,
    value: user.email,
    required: true,
  },
  ASubmit: {
    type: "Submit",
    value: LangContextx.Submit,
  },
};
  return (
<motion.div>
    <AnimalItem.UserContainer initial={{y:window.innerHeight/3 }} exit={{y: 0,opacity:0.7}} transition={{duration: 0.2}}>
        <AnimalItem.UserTitle as={motion.span} size="lg"  >{user.firstname}</AnimalItem.UserTitle>
        <AnimalItem.EditUserButton><AiOutlineEdit></AiOutlineEdit></AnimalItem.EditUserButton>
      </AnimalItem.UserContainer>
      <EditContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        <Form className="AniForm" Fields={AnimalFields} Action={handleSave}></Form>
        <motion.div as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}}>
            <LangSwitcher></LangSwitcher>
            <ThemeSwitcher></ThemeSwitcher>
        </motion.div>
      </EditContainer>
      <AnimalItem.BackButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>history.push("/Profile")}><AiOutlineRollback></AiOutlineRollback></AnimalItem.BackButton>
</motion.div>
  );
};

const EditContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  pointer-events: all;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
    height: 65vh;
    bottom: 0;
    top: unset;
    margin: 10vh 5vw;
    left: 0;
    right: unset;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

// animation animalplate
const transition = {
    delay: 0.6,
    duration: 1,
    ease: [0.43, 0.13, -0.23, 0.9],
  };
  const variants = {
    initialliItem: {
      y: 1000,
    },
    liItemafter: {
      y: 0,
      transition: transition,
    },
    liItemexit: {
      y: 1000,
      transition: { ...transition, delay: 0},
    },
  };

export default EditUser;
