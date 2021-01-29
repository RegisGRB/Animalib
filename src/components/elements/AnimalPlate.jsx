import React from "react";
import styled from "styled-components";
import * as AnimalItem from "./AnimalItem";
import ProfileAnimal from "./ProfileAnimal";
import { motion } from "framer-motion";
import { useSize } from "../../Hooks";
import { ThemeContext } from "../../context";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
const AnimalPlate = ({variants,transition,data,children}) => {
  const screenWidth = useSize().width;
  const ThemeContextx = React.useContext(ThemeContext);
  let history = useHistory();
 // en fonction de la width de l'ecran fait l'animation associé a l'élément

  React.useEffect(() => {
  }, [screenWidth]);

  return (
    <MotionContainer>
      <Itemlist
        as={motion.div}
        variants={variants}
        animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimateList" : "animateList"}
        exit={{
          opacity: 0,
          transition: { ...transition, delay: 0, duration: 0.6 },
        }}
      >
        <ProfileAnimal
          as={motion.img}
          variants={variants}
          initial={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileInitialImg" : "InitialImg"}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimateImg" : "animateImg"}
          transition={transition}
          type={data.type}
        ></ProfileAnimal>
        <AnimalItem.ItemName
          as={motion.span}
          variants={variants}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimateName" : "animateName"}
          size="md"
        >
          {data.name}
        </AnimalItem.ItemName>
        <AnimalItem.ItemSexe
          as={motion.span}
          variants={variants}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimateSexe" : "animateSexe"}
          size="sm"
        >
          Sexe: {data.sex}
        </AnimalItem.ItemSexe>
        <AnimalItem.ItemPuce
          as={motion.span}
          variants={variants}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimatePuce" : "animatePuce"}
          size="sm"
        >
          Puce: {data.puce_id}
        </AnimalItem.ItemPuce>
        <AnimalItem.ItemSterile
          as={motion.span}
          variants={variants}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimateSterile" : "animateSterile"}
          size="sm"
        >
          Sterile: {data.sterile.toString()}
        </AnimalItem.ItemSterile>
        <AnimalItem.ItemPoids
          as={motion.span}
          variants={variants}
          animate={screenWidth <= ThemeContextx.breakpointsValue.md ? "MobileanimatePoids" : "animatePoids"}
          size="sm"
        >
         Poids: {data.poids}
        </AnimalItem.ItemPoids>
      </Itemlist>
      {children}
      <AnimalItem.BackButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>history.push("/Profile")}><AiOutlineRollback></AiOutlineRollback></AnimalItem.BackButton>
    </MotionContainer>
  );
};

const MotionContainer = styled(motion.div)`
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
  top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    left: 0;
  }
`;



export default AnimalPlate;
