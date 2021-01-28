import React from "react";
import AnimalPlate from "../../components/elements/AnimalPlate";
import { GiMedicalThermometer, GiMedicines } from "react-icons/gi";
import { FaFileMedicalAlt } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import SpanText from "../../components/elements/SpanText";
import fakedata from "../Profile/fakedata";
import { useParams } from "react-router-dom";
import { helpers } from "../../utils";
import Form from "../../components/ui/Form/Form";

const Edit = () => {
  let { id } = useParams(); // en fonction de l'id dans l'url affiche un animal

  return (
    // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
    <AnimalPlate
      transition={transition}
      variants={variants}
      datax={fakedata.animal.filter((x) => x.id === id)[0]}
    >
      {/*element des différentes intervention de l'animal  */}
      <EditContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        <Form Fields={AnimalFields}></Form>
      </EditContainer>
    </AnimalPlate>
  );
};
/*
name: "raki",
        sex: "M",
        type: "bird",
        race: "silver tabby",
        dob: "02/02/2020",
        color: "gris",
        poids: "20kg",
        sterile: false,
        puce_id: "12345",
*/
const AnimalFields = {
  // Login Fields
  AName: {
    type: "Text",
    placeholder: "Name",
    value: "",
    required: true,
  },
  ARadioSexe: {
    checked: true,
    name: "Sexe",
    label: "Male",
    type: "Radio",
    value: "Male",
  },
  ARadioSexe1: {
    name: "Sexe",
    label: "Female",
    type: "Radio",
    value: "Female",
  },
  ARace: {
    type: "Text",
    placeholder: "Race",
    value: "",
    required: false,
  },
  ADob: {
    type: "date",
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
    placeholder: "Color",
    value: "",
    required: false,
  },
  APoids: {
    type: "Number",
    placeholder: "Poids kg",
    value: "",
    required: false,
  },
  ACheckBox: {
    type: "Checkbox",
    placeholder: "sterile",
    label:"Sterile",
    value: "",
    required: false,
  },
  APuce_id: {
    type: "Text",
    placeholder: "Puce ID",
    value: "",
    required: false,
  },
  ASubmit: {
    type: "Submit",
    value: "Login",
  },
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
  animateList: {
    opacity: 0.5,
    transition: transition,
  },
  MobileanimateList: {
    opacity: 0.5,
    transition: transition,
  },
  MobileInitialImg: {
  },
  InitialImg: {},
  MobileanimateImg: {
  },
  MobileanimateName: {
  },
  MobileanimateSexe: {
  },
  MobileanimatePuce: {
  },
  MobileanimateSterile: {
  },
  MobileanimatePoids: {
  },
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
    transition: { ...transition, delay: 0},
  },
};

export default Edit;
