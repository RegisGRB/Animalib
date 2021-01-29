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

const OverView = () => {
  let { id } = useParams(); // en fonction de l'id dans l'url affiche un animal

  return (
    // animalPlate affichant l'animal de base tel la fin de l'animation de profile puis fait une animation en fonction de variants definie ci-dessous
    <AnimalPlate
      transition={transition}
      variants={variants}
      data={fakedata.animal.filter((x) => x.id === id)[0]}
    >
      {/*element des différentes intervention de l'animal  */}
      <OverViewContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        <SearchContainer>
          {/* <SearchInput></SearchInput> */}
          <Results>{intervention.length} Results</Results>
        </SearchContainer>
        <ListItem>
          {intervention.map((element, index) => (
            <InterItem
              element={element}
              key={helpers.generateKey(index)}
            ></InterItem>
          ))}
        </ListItem>
      </OverViewContainer>
    </AnimalPlate>
  );
};
const InterItem = ({ element }) => {
  // intervention dropdown
  const [VisibleModal, SetVisibleModal] = React.useState(false);
  return (
    <OverViewItem
      onClick={() => {
        SetVisibleModal(!VisibleModal);
      }}
    >
      <IconContainer>{IntervSwitch(element.type)}</IconContainer>
      <ItemContainer>
        <DateContainer><TitleBold size="md">{element.Title}</TitleBold><SubTitle size="sm">{element.createdAt}</SubTitle></DateContainer>
        <DescElement>{element.description}</DescElement>
      </ItemContainer>
    </OverViewItem>
  );
};

const IntervSwitch = (inter) => {
  // switch d'icone en fonction  des differentes intervention
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
// const SearchInput = styled(motion.input)`
//   width: 80%;
//   height: 40px;
//   margin-top: 5vh;
//   margin-bottom: 20px;
//   border-radius: 40px;
//   display: flex;
//   align-items: center;
//   display:flex;
//   justify-content:center;
//   align-items:center;
// font-size:1.5rem;
//   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
//     width: 80%;
//   }
// `;
const Results = styled(SpanText)``;
const ListItem = styled.ul`
  width: 90%;
  margin-top: 2vh;
  overflow-x: hidden;
  overflow-y: scroll;
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
`;
const SearchContainer = styled(SpanText)`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DateContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content:space-between
`;
const OverViewContainer = styled(motion.div)`
  width: 80vw;
  height: 90vh;
  position: absolute;
  top: 0;
  margin: 10vh 10vw 0 10vw;

  right: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 600ms ease-in-out;
  z-index: 99;
  pointer-event: all;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
    height: 80vh;
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
  min-height: 85px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background:${(props) => props.theme.colors.secondary};
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s ease,
    transform 1000ms ease-in-out;
  pointer-events: all;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
const IconContainer = styled(motion.div)`
  width: 100px;
  margin: 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;

const ItemContainer = styled(motion.div)`
height:100%;
width:90%;
margin:20px 10% 20px 0;
`;
const TitleBold = styled(SpanText)`
font-weight:500;
color:${(props) => props.theme.colors.primary};
`;
const SubTitle = styled(SpanText)`
font-weight:500;
color:${(props) => props.theme.colors.primary};
opacity:0.5;
`;
const DescElement = styled(motion.p)`
color:${(props) => props.theme.colors.primary};
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
// const transition = {
//   delay: 0.5,
//   duration: 1,
//   ease: [0.43, 0.13, -0.23, 0.9],
// };
// const variants = {
//   animateList: {
//     left: "5%",
//     transition: transition,
//   },
//   MobileanimateList: {},
//   MobileInitialImg: {
//     left: "15vw",
//     top: "20vh",
//   },

//   MobileanimateImg: {
//     left: "10%",
//     top: "-15vh",
//     opacity: 0.2,
//     transition: transition,
//   },
//   MobileanimateName: {
//     left: "5%",
//     top: "-5vh",
//     transition: transition,
//   },
//   MobileanimateSexe: {
//     left: "60%",
//     top: "-3.9vh",
//     transition: transition,
//   },
//   MobileanimatePuce: {
//     left: "60%",
//     top: 0,
//     transition: transition,
//   },
//   MobileanimateSterile: {
//     left: "60%",
//     top: "3.9vh",
//     transition: transition,
//   },
//   MobileanimatePoids: {
//     left: "60%",
//     top: "7.8vh",
//     transition: transition,
//   },
//   animateName: {},
//   animateSexe: {},
//   animatePuce: {},
//   animateSterile: {},
//   animatePoids: {},
//   initialliItem:{
//     x:1000
//   },
//   liItemafter:{
//     x:0,
//     transition: transition,
//   },
//   liItemexit:{
//     x:1000,
//     transition: {...transition,delay:0,duration:0.2},
//   }
// };
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
