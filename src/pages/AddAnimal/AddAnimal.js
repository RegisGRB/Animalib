import React from "react";
import * as AnimalItem from "../../components/elements/AnimalItem";
import { AiFillPlusCircle,AiOutlineRollback } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import fakedata from "../Profile/fakedata";
import { useParams } from "react-router-dom";
import Form from "../../components/ui/Form/Form";
import { useHistory } from "react-router-dom";
import {LangContext} from "../../context";
const AddAnimal = () => {
  const LangContextx = React.useContext(LangContext);
  let { id } = useParams(); // en fonction de l'id dans l'url affiche un animal
  const data = fakedata.animal.filter((x) => x.id === id)[0];
  let history = useHistory();
  const AnimalFields = {
    // Login Fields
    AName: {
      type: "Text",
      placeholder: LangContextx.Name,
      value: "",
      required: true,
    },
    ASelect: {
      name: "Sexe",
      as: "select",
      value: "",
      option: ["Male", "Female"],
      required: true,
    },

    ARace: {
      type: "Text",
      placeholder: LangContextx.Race,
      value: "",
      required: false,
    },
    ADob: {
      type: "date",
      value: "",
      required: false,
    },

    Acolor: {
      type: "Text",
      placeholder: LangContextx.Color,
      value: "",
      required: false,
    },
    APoids: {
      type: "Number",
      placeholder: LangContextx.Weight,
      value: "",
      required: false,
    },
    ASterile: {
      checked: false,
      type: "Checkbox",
      placeholder: LangContextx.Sterile,
      label: "Sterile",
      value: "",
      required: false,
    },
    APuce_id: {
      type: "Text",
      placeholder: LangContextx.Chip,
      value: "",
      required: false,
    },
    ASubmit: {
      type: "Submit",
      value: LangContextx.Submit,
    },
  };
  return (
    // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
    <>
      <motion.div
        className=""
        exit={{ opacity: 0 }}
        transition={{ ...transition, duration:  1 }}
      >
        <AddContainer>
          <AnimalItem.AddButton>
            <AiFillPlusCircle
              onClick={() => {}}
            ></AiFillPlusCircle>
          </AnimalItem.AddButton>
        </AddContainer>
        <div className="ButtonSlide">
          <AnimalItem.AddTitleContainer>
            <AnimalItem.AddTitle size="md">Add Animal</AnimalItem.AddTitle>
          </AnimalItem.AddTitleContainer>
        </div>
      </motion.div>
      {/*element des différentes intervention de l'animal  */}
      <EditContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        <Form className="AniForm" Fields={AnimalFields}></Form>
      </EditContainer>
      <AnimalItem.BackButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>history.push("/Profile")}><AiOutlineRollback></AiOutlineRollback></AnimalItem.BackButton>

    </>
  );
};
const AddContainer = styled(AnimalItem.Itemlist)`
margin:10vh 0;
opacity:0.7;
`;
const EditContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
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
  animateList: {
    opacity: 0.5,
    transition: transition,
  },
  MobileanimateList: {
    opacity: 0.5,
    transition: transition,
  },
  MobileInitialImg: {},
  InitialImg: {},
  MobileanimateImg: {},
  MobileanimateName: {},
  MobileanimateSexe: {},
  MobileanimatePuce: {},
  MobileanimateSterile: {},
  MobileanimatePoids: {},
  animateName: {},
  animateSexe: {},
  animatePuce: {},
  animateSterile: {},
  animatePoids: {},
  initialliItem: {
    y: 1000,
  },
  liItemafter: {
    y: 0,
    transition: transition,
  },
  liItemexit: {
    y: 1000,
    transition: { ...transition, delay: 0 },
  },
};

export default AddAnimal;
