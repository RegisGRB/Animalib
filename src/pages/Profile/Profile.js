import React from "react";
import * as AnimalItem from "../../components/elements/AnimalItem";
import Carousel from "../../components/elements/Carousel";
import styled from "styled-components";
import fakedata from "./fakedata";
import ProfileAnimal from "../../components/elements/ProfileAnimal";
import helpers from "../../utils/helpers";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import SpanText from "../../components/elements/SpanText";
import { AiOutlineEdit,AiTwotoneCalendar,AiOutlineReconciliation } from "react-icons/ai";

const Profile = () => {
  const [indexClicked,setindexClicked] = React.useState(0);
  let history = useHistory();
  // Page de transition entre Overview Calendar et Edit

  const Action = ( Value, redirect) => { {/* action de transition pour naviguer entre les pages */}
      setindexClicked(Value);
      history.push(redirect);
  };
  return (
    <SliderContainer as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1.6,ease: [0.43, 0.13, -0.23, 0.9]}}}>
      <UserTitle as={motion.span} size="xl" exit={{opacity: 0}} transition={{...transition,duration:0.4,delay:0.8}}>{fakedata.firstname}</UserTitle>
      <DisconnectTitle as={motion.span} size="sm" onClick={()=>{localStorage.clear();Action(null, "/")}} exit={{opacity: 0}} transition={{...transition,duration:0.4,delay:0.8}}>Deconnection</DisconnectTitle>
      <Carousel>
        {fakedata.animal.map((animal, index) => (  
          <motion.div
            className="slide"
            key={helpers.generateKey(index)}
            exit={{opacity:indexClicked === index ? 1 : 0}}
            transition={{...transition,duration:indexClicked === index ? 1 : 0.2}}
          >
             {/* Button utilisé pour navigué entre les différents page d'un animal Edit OverView Calendar*/}
            <div className="ButtonSlide">
              <motion.div exit={{opacity: 0}} transition={{...transition,duration:0.4,delay:0.8}}>
                <EditButton onClick={() => Action(index, ("/Edit/" + animal.id))}><AiOutlineEdit></AiOutlineEdit></EditButton>
                <CalendarButton onClick={() => Action(index, ("/Calendar/" + animal.id))}><AiTwotoneCalendar></AiTwotoneCalendar></CalendarButton>
                <OverViewButton onClick={() => Action(index, ("/OverView/" + animal.id))}><AiOutlineReconciliation></AiOutlineReconciliation></OverViewButton>
              </motion.div>
            </div>
            {/* AnimalItem groupe de styled component utilisé pour les différentes pages et transition pour une form homogene */}
            <AnimalItem.Itemlist>
              <ProfileAnimal type={animal.type}></ProfileAnimal>
              <AnimalItem.ItemName size="md">{animal.name}</AnimalItem.ItemName>
              <AnimalItem.ItemSexe size="sm">Sexe: {animal.sex}</AnimalItem.ItemSexe>
              <AnimalItem.ItemPuce size="sm">Puce: {animal.puce_id}</AnimalItem.ItemPuce>
              <AnimalItem.ItemSterile size="sm">Sterile: {animal.sterile.toString()}</AnimalItem.ItemSterile>
              <AnimalItem.ItemPoids size="sm" >Poids: {animal.poids}</AnimalItem.ItemPoids>
            </AnimalItem.Itemlist>
          </motion.div>
        ))}
      </Carousel>
    </SliderContainer>
  );
};

const UserTitle = styled(SpanText)`
top: 20px;
left: 70px;
font-weight:bold;
position:absolute;
`;
const DisconnectTitle = styled(SpanText)`
top:55px;
right:70px;
color:red;
cursor:pointer;
font-weight:bold;
position:absolute;
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
top:unset;
right:unset;
bottom: 4vh;
left: 25px;
}
pointer-events:all;
transition:all 0.6s ease-out;
&:hover{
  transform:scale(1.1);
}
`;
const CalendarButton = styled(AnimalItem.ItemButton)`
bottom:100px;
left:85px;
`;
const EditButton = styled(AnimalItem.ItemButton)`
top:50px;
right:85px;
`;
const OverViewButton = styled(AnimalItem.ItemButton)`
bottom:100px;
right:85px;
`;
const transition = {
  ease: [0.43, 0.13, -0.23, 0.9],
};
const SliderContainer = styled.div`
  width: 100%;
  margin: 10vh auto;
`;

export default Profile;
