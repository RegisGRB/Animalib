import React from "react";
import SpanText from "../../components/elements/SpanText";
import styled from "styled-components";
import fakedata from "../Profile/fakedata";
import * as AnimalItem from "../../components/elements/AnimalItem";
import ProfileAnimal from "../../components/elements/ProfileAnimal";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSize } from "../../Hooks";
import { ThemeContext } from "../../context";
const Animal = () => {
  const screenWidth = useSize().width;
  const ThemeContextx = React.useContext(ThemeContext);
  const [Mobile, setMobile] = React.useState(false);
  let { id } = useParams();
  const [data, setData] = React.useState(
    fakedata.animal.filter((x) => x.id === id)[0]
  );
  React.useEffect(() => {
    if (screenWidth <= ThemeContextx.breakpointsValue.md) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenWidth]);
  return (
    <MotionContainer>
      <Itemlist
        as={motion.div}
        variants={variants}
        animate={Mobile ? "" : "animateList"}
        exit={{
          opacity: 0,
          transition: { ...transition, delay: 0, duration: 0.6 },
        }}
      >
        <ProfileAnimal
          as={motion.img}
          animate={Mobile ? {opacity:0.2} : ""}
          transition={transition}
          type={data.type}
        ></ProfileAnimal>
        <AnimalItem.ItemName
          as={motion.span}
          variants={variants}
          animate={Mobile ? "animateName" : ""}
          size="md"
        >
          {data.name}
        </AnimalItem.ItemName>
        <AnimalItem.ItemSexe
          as={motion.span}
          variants={variants}
          animate={Mobile ? "animateSexe" : ""}
          size="sm"
        >
          Sexe: {data.sex}
        </AnimalItem.ItemSexe>
        <AnimalItem.ItemPuce
          as={motion.span}
          variants={variants}
          animate={Mobile ? "animatePuce" : ""}
          size="sm"
        >
          Puce: {data.puce_id}
        </AnimalItem.ItemPuce>
        <AnimalItem.ItemSterile
          as={motion.span}
          variants={variants}
          animate={Mobile ? "animateSterile" : ""}
          size="sm"
        >
          Sterile: {data.sterile.toString()}
        </AnimalItem.ItemSterile>
        <AnimalItem.ItemPoids
          as={motion.span}
          variants={variants}
          animate={Mobile ? "animatePoids" : ""}
          size="sm"
        >
         Poids: {data.poids}
        </AnimalItem.ItemPoids>
      </Itemlist>
    </MotionContainer>
  );
};

const transition = {
  delay: 1,
  duration: 1,
  ease: [0.43, 0.13, -0.23, 0.9],
  transition: {
    delayChildren: 0.5,
    staggerDirection: -1,
  },
};
const variants = {
  animateList: {
    left: "5%",
    transition: transition,
  },
  animateName: {
    left: "5%",
    top: "-5vh",
    transition: transition,
  },
  animateSexe: {
    left: "65%",
    top: "-3.9vh",
    transition: transition,
  },
  animatePuce: {
    left: "65%",
    top: 0,
    transition: transition,
  },
  animateSterile: {
    left: "65%",
    top: "3.9vh",
    transition: transition,
  },
  animatePoids: {
    left: "65%",
    top: "7.8vh",
    transition: transition,
  },
};
const MotionContainer = styled(motion.div)`
  pointer-events: none;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Itemlist = styled.div`
  pointer-events: none;
  position: relative;
  height: 80vh;
  width: 33.33%;
  left: 33.33%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    left: 0;
  }
  top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const intervention=[
  {
   idMedecn:"medecin",
   idAnimal:"animal",
   type:"Vaccin",
   description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia"
  },
  {
    idMedecn:"medecin",
    idAnimal:"animal",
    type:"Vaccin",
    description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia"
   },
   {
    idMedecn:"medecin",
    idAnimal:"animal",
    type:"Vaccin",
    description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia"
   },
   {
    idMedecn:"medecin",
    idAnimal:"animal",
    type:"Vaccin",
    description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia"
   },
   {
    idMedecn:"medecin",
    idAnimal:"animal",
    type:"Vaccin",
    description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia"
   },
]

export default Animal;
