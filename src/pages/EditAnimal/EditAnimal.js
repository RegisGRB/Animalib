import React from "react";
import AnimalPlate from "../../components/elements/AnimalPlate";
import * as AnimalItem from "../../components/elements/AnimalItem";
import styled from "styled-components";
import { motion } from "framer-motion";
import fakedata from "../Profile/fakedata";
import { useParams } from "react-router-dom";
import Form from "../../components/ui/Form/Form";
import { CgCloseO } from "react-icons/cg";
import MotionModal from "../../components/Motion/MotionModal";
const Edit = () => {
  let { id } = useParams(); // en fonction de l'id dans l'url affiche un animal
  const [DeleteModal, setDeleteModal] = React.useState(false);
  const data = fakedata.animal.filter((x) => x.id === id)[0];
  const AnimalFields = {
    // Login Fields
    AName: {
      type: "Text",
      placeholder: "Name",
      value: data.name,
      required: true,
    },
    ASelect: {
      name: "Sexe",
      as: "select",
      value: data.sex,
      option: ["Male", "Female"],
      required: true,
    },

    ARace: {
      type: "Text",
      placeholder: "Race",
      value: data.race,
      required: false,
    },
    ADob: {
      type: "date",
      value: data.dob,
      required: false,
    },

    Acolor: {
      type: "Text",
      placeholder: "Color",
      value: data.color,
      required: false,
    },
    APoids: {
      type: "Number",
      placeholder: "Poids kg",
      value: data.poids,
      required: false,
    },
    ASterile: {
      checked: data.sterile,
      type: "Checkbox",
      placeholder: "sterile",
      label: "Sterile",
      value: "",
      required: false,
    },
    APuce_id: {
      type: "Text",
      placeholder: "Puce ID",
      value: data.puce_id,
      required: false,
    },
    ASubmit: {
      type: "Submit",
      value: "Submit",
    },
  };
  return (
    // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
    <AnimalPlate transition={transition} variants={variants} data={data}>
      {/*element des différentes intervention de l'animal  */}
      <EditContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        <Form className="AniForm" Fields={AnimalFields}></Form>
      </EditContainer>
      <DeleteAnimalButton onClick={() => setDeleteModal(true)}>
        <CgCloseO></CgCloseO>
      </DeleteAnimalButton>
      <MotionModal controller={DeleteModal} hidden={[0, 0, 0]} show={[0, 0, 1]}>
        <SurDeleteModal></SurDeleteModal>
      </MotionModal>
    </AnimalPlate>
  );
};
const SurDeleteModal = styled(motion.div)`
width:400px;
height:400px;
background:red;
height
`;
const DeleteAnimalButton = styled(AnimalItem.BackButton)`
  left: unset;
  right: 40px;
  &:hover {
    transform: scale(1);
    color: red;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 20px;
    right: unset;
    width: 40px;
    height: 40px;
  }
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

export default Edit;
