import React from "react";
import AnimalPlate from "../../components/elements/AnimalPlate";
import { GiMedicalThermometer, GiMedicines } from "react-icons/gi";
import { FaFileMedicalAlt } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import SpanText from "../../components/elements/SpanText";
import fakedata from "../Profile/fakedata"
import { useParams } from "react-router-dom";
import { helpers } from "../../utils";

const OverView = () => {
  let { id } = useParams();// en fonction de l'id dans l'url affiche un animal

  return (
    // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
    <AnimalPlate transition={transition} variants={variants} datax={fakedata.animal.filter((x) => x.id === id)[0]}>
       {/*element des différentes intervention de l'animal  */}
      <OverViewContainer initial="initialliItem" animate="liItemafter" exit="liItemexit" variants={variants}>
        <ul >
          {intervention.map((element,index) => (
            <InterItem element={element} key={helpers.generateKey(index)}></InterItem>
          ))}
        </ul>
      </OverViewContainer>
    </AnimalPlate>
  );
};
const InterItem = ({element}) =>{ // intervention dropdown
  const [VisibleModal, SetVisibleModal] = React.useState(false);
  return(
  <OverViewItem onClick={()=>{SetVisibleModal(!VisibleModal)}}>
    <ItemContainer>
      <InfoContainer>
        <IconContainer>{IntervSwitch(element.type)}</IconContainer>
        <TitleContainer>
          <TitleBold size="sm">{element.Title}</TitleBold>
          <SubTitle size="sm">edited: {element.updatedAt}</SubTitle>
        </TitleContainer>
      </InfoContainer>
      <SubInfoContainer>
        <SubTitle size="sm">Vétérinaire: Francis</SubTitle>
      </SubInfoContainer>
    </ItemContainer>
    {VisibleModal && (<DescContainer><TitleBold size="sm">Description:</TitleBold>{element.description}</DescContainer>)}
</OverViewItem>
);
}

const IntervSwitch = (inter) => { // switch d'icone en fonction  des differentes intervention
  switch (inter) {
    case "Consultation":
      return <FaFileMedicalAlt></FaFileMedicalAlt>;
    case "Vaccin":
      return <GiMedicalThermometer></GiMedicalThermometer>;
    case "Medicament":
      return <GiMedicines></GiMedicines>;
    default:
      return <FaFileMedicalAlt></FaFileMedicalAlt>;
  }
};

const OverViewContainer = styled(motion.div)`
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  transition:all 600ms ease-in-out;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background: grey;
  }
  z-index: 99;
  pointer-event: all;
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

const OverViewItem = styled(motion.li)`
  width: 98%;
  height: fit-content;
  min-height:85px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  cursor:pointer;
  border: 1px solid grey;
  transition: border-color 0.3s, box-shadow 0.3s ease,transform 1000ms ease-in-out;
  pointer-events:all;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
 
`;
const DescContainer = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction:column;
  padding: 30px;
`;
const ItemContainer = styled(motion.div)`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoContainer = styled(motion.div)`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
`;
const IconContainer = styled(motion.div)`
  width: 70px;
  height: 90%;
  margin: 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  background:${(props) => props.theme.colors.secondary};
  color:${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50vw;
    height: 60%;
    margin: 0 3vw;
  }
`;
const TitleContainer = styled(motion.div)`
  height: 90%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TitleBold = styled(SpanText)`
  font-weight: bold;
`;
const SubTitle = styled(SpanText)`
  opacity: 0.5;
`;
const SubInfoContainer = styled(motion.div)`
  width: 30%;
  height: 80%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// animation animalplate
const transition = {
  delay: 0.6,
  duration: 1,
  ease: [0.43, 0.13, -0.23, 0.9],
};
const variants = {
  animateList: {
    left: "5%",
    transition: transition,
  },
  MobileanimateList: {},
  MobileInitialImg: {
    left: "15vw",
    top: "20vh",
  },
  InitialImg: {},
  MobileanimateImg: {
    left: "10%",
    top: "-15vh",
    opacity: 0.2,
    transition: transition,
  },
  MobileanimateName: {
    left: "5%",
    top: "-5vh",
    transition: transition,
  },
  MobileanimateSexe: {
    left: "60%",
    top: "-3.9vh",
    transition: transition,
  },
  MobileanimatePuce: {
    left: "60%",
    top: 0,
    transition: transition,
  },
  MobileanimateSterile: {
    left: "60%",
    top: "3.9vh",
    transition: transition,
  },
  MobileanimatePoids: {
    left: "60%",
    top: "7.8vh",
    transition: transition,
  },
  animateName: {},
  animateSexe: {},
  animatePuce: {},
  animateSterile: {},
  animatePoids: {},
  initialliItem:{
    x:1000
  },
  liItemafter:{
    x:0,
    transition: transition,
  },
  liItemexit:{
    x:1000,
    transition: {...transition,delay:0,duration:0.2},
  }
};
// fake intervention
const intervention = [
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Consultation",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Vaccin",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
  {
    idMedecn: "medecin",
    idAnimal: "animal",
    type: "Medicament",
    Title: "Vaccin special",
    createdAt: "2021-01-21T14:33:37.656Z",
    updatedAt: "2021-01-21T15:22:18.792Z",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia",
  },
];
export default OverView;
