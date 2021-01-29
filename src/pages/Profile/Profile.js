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
import ThemeSwitcher from "../../components/ui/ThemeSwitcher/ThemeSwitcher";

const Profile = () => {
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
    <SliderContainer as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.2}}}>
     <ThemeSwitcher></ThemeSwitcher>
      <AnimalItem.UserContainer exit={{opacity:indexClicked === -2 ? 0.7 : 0,y:indexClicked === -2 ? (window.innerHeight/3)+100 : 0}} transition={{duration:1}}  >
        <AnimalItem.UserTitle as={motion.span} size="lg"  >{fakedata.firstname}</AnimalItem.UserTitle>
        <EditUserButton ><AiOutlineEdit></AiOutlineEdit></EditUserButton>
      </AnimalItem.UserContainer>
      <DisconnectTitle as={motion.span} size="sm" onClick={()=>{localStorage.clear();Action(null, "/")}} exit={{opacity: 0}} transition={{...transition,duration:0.2}}>Deconnection</DisconnectTitle>
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
              <motion.div exit={{opacity: 0}} transition={{...transition,duration:0.2}}>
                <EditButton onClick={() => Action(index, ("/EditAnimal/" + animal.id))}><AiOutlineEdit></AiOutlineEdit></EditButton>
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
         <motion.div
            className="slide"
            exit={{opacity:0}}
            transition={{...transition,duration: indexClicked === -1 ? 1 : 0.2}}
          >
             <AnimalItem.Itemlist>
                <AddButton ><AiFillPlusCircle  onClick={() => Action(-1,"/")}></AiFillPlusCircle></AddButton>
              </AnimalItem.Itemlist>
              <div className="ButtonSlide">
                <AddTitleContainer>
                  <AddTitle size="md">Add Animal</AddTitle>
                </AddTitleContainer>
            </div>
          </motion.div>
      </Carousel>
    </SliderContainer>
  );
};

const DisconnectTitle = styled(SpanText)`
top:55px;
right:70px;
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
bottom:100px;
left:85px;
`;
const EditButton = styled(AnimalItem.ItemButton)`
top:50px;
right:85px;
`;
const AddButton = styled(AnimalItem.ItemButton)`
display:flex;
width: 200px;
Height: 200px;
font-size:5rem;
background:unset;
border-style: dotted;
color:${(props) => props.theme.colors.secondary};
justify-content:center;
align-items:center;
&:hover{
  transform:scale(1);
}
`;
const AddTitleContainer = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: flex-end;
`;
const AddTitle = styled(SpanText)`
text-transform:uppercase;
opacity:0.2;
margin-bottom:100px;
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
