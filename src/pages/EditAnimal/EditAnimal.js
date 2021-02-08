import React from "react";
import AnimalPlate from "../../components/elements/AnimalPlate";
import * as AnimalItem from "../../components/elements/AnimalItem";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Form from "../../components/ui/Form/Form";
import { CgCloseO, CgCheckO } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import MotionModal from "../../components/Motion/MotionModal";
import { LangContext } from "../../context";
import SpanText from "../../components/elements/SpanText";
import { useHistory } from "react-router-dom";
import {AnimalService} from "../../services";
const Edit = () => {
  let history = useHistory();
  const LangContextx = React.useContext(LangContext);
  let { id } = useParams(); // en fonction de l'id dans l'url affiche un animal
  const [DeleteModal, setDeleteModal] = React.useState(false);
  const [data,setdata] = React.useState({});

  React.useEffect(() => {
    AnimalService.fetchAnimal(id)
        .then(res => {
          if(!res.data) {
              return;
          }
          console.log(res.data);
          setdata(res.data);
        });
}, []);
  const AnimalFields = {
    // Login Fields
    AName: {
      type: "Text",
      placeholder: LangContextx.Name,
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
      placeholder: LangContextx.Race,
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
      placeholder: LangContextx.Color,
      value: data.color,
      required: false,
    },
    APoids: {
      type: "Number",
      placeholder: LangContextx.Weight,
      value: data.poids,
      required: false,
    },
    ASterile: {
      checked: data.sterile,
      type: "Checkbox",
      placeholder: LangContextx.Sterile,
      label: LangContextx.Sterile,
      value: "",
      required: false,
    },
    APuce_id: {
      type: "Text",
      placeholder: LangContextx.Chip,
      value: data.puce_id,
      required: false,
    },
    ASubmit: {
      type: "Submit",
      value: LangContextx.Submit,
    },
  };

  const DeleteAnimal = () =>{
    alert("DELETE"+data.id);
    history.push("/Profile");
  }
  return (
    <>
   {data.type ?  // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
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
      <DeleteAnimalButton onClick={() => setDeleteModal(true)} as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} >
        <AiFillPlusCircle></AiFillPlusCircle>
      </DeleteAnimalButton>
      <MotionModal controller={DeleteModal} hidden={[0, 0, 0]} show={[0, 0, 1]}>
        <DeleteContainer >
          <SurDeleteModal>
            <TitleDelete size="lg">
              {LangContextx.Delete} {data.name}
            </TitleDelete>
            <PreventButtonContainer>
              <PreventDeleteButton onClick={() => DeleteAnimal()}>
                <CgCheckO></CgCheckO>
              </PreventDeleteButton>
              <PreventDeleteButton onClick={() => setDeleteModal(false)}>
                <CgCloseO></CgCloseO>
              </PreventDeleteButton>
            </PreventButtonContainer>
          </SurDeleteModal>
        </DeleteContainer>
      </MotionModal>
    </AnimalPlate>:<SpanText>Loading</SpanText>
  }
  </>
  );
};
const SurDeleteModal = styled(motion.div)`
  width: 50vw;
  height: 40vh;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:relative;
  border-radius:10px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90vw;
    height: 60vh;
  }

`;
const TitleDelete = styled(SpanText)`
margin-bottom:50px;
text-align:center;
`;
const PreventButtonContainer = styled(motion.div)`
width:100%;
  display: flex;
  justify-content: space-around;
`;
const PreventDeleteButton = styled(AnimalItem.BackButton)`
  left: unset;
  right: unset;
  top: unset;
  position: unset;
  &:hover {
    transform: scale(1.1);
    color: unset;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
  }
`;
const DeleteAnimalButton = styled(AnimalItem.BackButton)`
  left: unset;
  right: 40px;
  transform:rotate(45deg);
  border-color:red;
  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 20px;
    right: unset;
    width: 40px;
    height: 40px;
  }
`;
const EditContainer = styled(motion.div)`
  width: 100vw;
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
    width: 90vw;
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
const DeleteContainer = styled(EditContainer)`
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100vw;
  height:100vh;
  left: 0;
  top: 0;
  margin: 0 0;
  &::-webkit-scrollbar {
    width: 0px;
  }
}
  background: rgba(0, 0, 0, 0.5);
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
