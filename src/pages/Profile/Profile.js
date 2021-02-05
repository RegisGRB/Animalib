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
import { AiOutlineEdit,AiTwotoneCalendar,AiOutlineReconciliation,AiFillPlusCircle } from "react-icons/ai";

import StyledTheme from "../../components/StyledComponents/StyledTheme";
import {LangContext} from "../../context";
const Profile = () => {
  const LangContextx = React.useContext(LangContext);
  const [indexClicked,setindexClicked] = React.useState(0);
// -2 EditUser animation
// -1 AddAnimal animation
// >= 0  AnimalSelect animation
  let history = useHistory();
  // Page de transition entre Overview Calendar et Edit

  const Action = ( Value, redirect) => { {/* action de transition pour naviguer entre les pages */}
      setindexClicked(Value);
      history.push(redirect);
  };
  return (
    <SliderContainer as={motion.div} initial={{opacity:0}} animate={{opacity:1,duration:0.2}}>
      <AnimalItem.UserContainer onClick={()=>Action(-2,("/EditUser/"+fakedata._id))} exit={{opacity:indexClicked === -2 ? 0.7 : 0,y:indexClicked === -2 ? (window.innerHeight/3) : 0,duration:1}}  >
        <StyledTheme flex={true}>
            <AnimalItem.UserTitle as={motion.span} size="lg"  >{fakedata.firstname}</AnimalItem.UserTitle>
            <EditUserButton ><AiOutlineEdit></AiOutlineEdit></EditUserButton>
        </StyledTheme>
      </AnimalItem.UserContainer>
      <CalendarButton onClick={()=>Action(-2,("/Calendar"))}><AiTwotoneCalendar></AiTwotoneCalendar></CalendarButton>
      <DisconnectTitle as={motion.span} size="sm" onClick={()=>{localStorage.clear();Action(null, "/")}} exit={{opacity: 0,...transition,duration:0.2}}>{LangContextx.LogOut}</DisconnectTitle>
      <Carousel>
        {fakedata.animal.map((animal, index) => (  
          <motion.div
            className="slide"
            key={index+animal.id}
            exit={{opacity:indexClicked === index ? 1 : 0,...transition,duration:indexClicked === index ? 1 : 0.2}}
          >
             {/* Button utilisé pour navigué entre les différents page d'un animal Edit OverView Calendar*/}
            <div className="ButtonSlide">
              <motion.div exit={{opacity: 0,...transition,duration:1.2}}>
                <EditButton onClick={() => Action(index, ("/EditAnimal/" + animal.id))}><AiOutlineEdit></AiOutlineEdit></EditButton>
              
                {/*<OverViewButton onClick={() => Action(index, ("/OverView/" + animal.id))}><AiOutlineReconciliation></AiOutlineReconciliation></OverViewButton> */}
              </motion.div>
            </div>
            {/* AnimalItem groupe de styled component utilisé pour les différentes pages et transition pour une form homogene */}
            <AnimalItem.Itemlist>
              <ProfileAnimal type={animal.type}></ProfileAnimal>
              <AnimalItem.ItemName size="md">{animal.name}</AnimalItem.ItemName>
              <AnimalItem.ItemSexe size="sm">{LangContextx.Sex}: {animal.sex}</AnimalItem.ItemSexe>
              <AnimalItem.ItemPuce size="sm">{LangContextx.Chip}: {animal.puce_id}</AnimalItem.ItemPuce>
              <AnimalItem.ItemSterile size="sm">{LangContextx.Sterile}: {animal.sterile.toString()}</AnimalItem.ItemSterile>
              <AnimalItem.ItemPoids size="sm" >{LangContextx.Weight}: {animal.poids}</AnimalItem.ItemPoids>
            </AnimalItem.Itemlist>
          </motion.div>
        ))}
         <motion.div
            className="slide"
            exit={{opacity:indexClicked === -1 ? 0.5 : 0,...transition,duration: indexClicked === -1 ? 1 : 0.2}}
          >
             <AnimalItem.Itemlist>
                <AnimalItem.AddButton ><AiFillPlusCircle  onClick={() => Action(-1,"/AddAnimal")}></AiFillPlusCircle></AnimalItem.AddButton>
              </AnimalItem.Itemlist>
              <div className="ButtonSlide">
                <AnimalItem.AddTitleContainer>
                  <AnimalItem.AddTitle size="md">{LangContextx.AddAnimal}</AnimalItem.AddTitle>
                </AnimalItem.AddTitleContainer>
            </div>
          </motion.div>
      </Carousel>
    </SliderContainer>
  );
};

const DisconnectTitle = styled(SpanText)`
top:55px;
left:70px;
color:red;
z-index:2;
cursor:pointer;
font-weight:bold;
opacity:0.7;
position:absolute;
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
top:unset;
right:unset;
bottom: 4vh;
left: 25px;
opacity:1;
}
pointer-events:all;
transition:all 0.6s ease-out;
&:hover{
  opacity:1;
}
`;

const EditUserButton = styled(AnimalItem.EditUserButton)`
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
 width:20px;
 height:20px;
  }
`;
const CalendarButton = styled(AnimalItem.ItemButton)`
right: 70px;
top: 10px;
width: 70px;
height: 70px;
font-size: 1.5rem;
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  top: unset;
  bottom:20px;
  right: 20px;
  width: 40px;
  height: 40px;
}
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
