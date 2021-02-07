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
import { AiOutlineEdit,AiTwotoneCalendar,AiFillPlusCircle } from "react-icons/ai";
import StyledTheme from "../../components/StyledComponents/StyledTheme";
import {LangContext} from "../../context";
import Auth from "../../utils/Auth";
import {AnimalService} from "../../services";
import {useEffect} from "react";
const Profile = () => {
  const LangContextx = React.useContext(LangContext);
  const user = Auth.getUser();
  let history = useHistory();
  const [animals, setAnimals] = React.useState([]);
  useEffect(() => {
      AnimalService.fetchUserAnimal(user._id, user.token)
          .then(res => {
            if(!res.data) {
                return;
            }
            console.log(res.data);
            setAnimals(res.data);
          });
  }, []);
  const [indexClicked, setindexClicked] = React.useState(0);
    // -2 EditUser animation
    // -1 AddAnimal animation
    // >= 0  AnimalSelect animation
  const Action = (Value, redirect) => { {/* action de transition pour naviguer entre les pages */}
      setindexClicked(Value);
      history.push(redirect);
  };
  return (
    <SliderContainer as={motion.div} initial={{opacity:0}} animate={{opacity:1,duration:0.2}}>
      <AnimalItem.UserContainer onClick={()=>Action(-2,("/EditUser/"+user._id))} exit={{opacity:indexClicked === -2 ? 0.7 : 0,y:indexClicked === -2 ? (window.innerHeight/3) : 0,duration:1}}  >
        <StyledTheme flex={true}>
            <AnimalItem.UserTitle as={motion.span} size="lg"  >{user.firstname}</AnimalItem.UserTitle>
            <EditUserButton ><AiOutlineEdit></AiOutlineEdit></EditUserButton>
        </StyledTheme>
      </AnimalItem.UserContainer>
      <CalendarButton onClick={()=>Action(-2,("/Calendar"))}><AiTwotoneCalendar></AiTwotoneCalendar></CalendarButton>
      <DisconnectTitle as={motion.span} size="sm" onClick={()=>{ Auth.logout(); Action(null, "/")}} exit={{opacity: 0,...transition,duration:0.2}}>{LangContextx.LogOut}</DisconnectTitle>
     {animals.length > 0 ? 
      <Carousel data={animals}>
        {animals.map((animal, index) => (
          <motion.div
            className="slide"
            key={index+animal._id}
            exit={{opacity:indexClicked === index ? 1 : 0,...transition,duration:indexClicked === index ? 1 : 0.2}}
          >
            <SlideContainer data={animals.length}>
            <div className="ButtonSlide">
              <motion.div exit={{opacity: 0,...transition,duration:1.2}}>
                <EditButton onClick={() => Action(index, ("/EditAnimal/" + animal._id))}><AiOutlineEdit></AiOutlineEdit></EditButton>
              </motion.div>
            </div>
            <AnimalItem.Itemlist>
              <ProfileAnimal type={animal.type}></ProfileAnimal>
              <AnimalItem.ItemName size="md">{animal.name}</AnimalItem.ItemName>
              <AnimalItem.ItemSexe size="sm">{LangContextx.Sex}: {animal.sex}</AnimalItem.ItemSexe>
              <AnimalItem.ItemPuce size="sm">{LangContextx.Chip}: {animal.puce_id}</AnimalItem.ItemPuce>
              <AnimalItem.ItemSterile size="sm">{LangContextx.Sterile}: {animal.sterile.toString()}</AnimalItem.ItemSterile>
              <AnimalItem.ItemPoids size="sm" >{LangContextx.Weight}: {animal.weight}</AnimalItem.ItemPoids>
            </AnimalItem.Itemlist>
            </SlideContainer>
          </motion.div>
        
        ))}
         <motion.div
            className="slide"
            exit={{opacity:indexClicked === -1 ? 0.5 : 0,...transition,duration: indexClicked === -1 ? 1 : 0.2}}
          >
              <SlideContainer data={animals.length}>
             <AnimalItem.Itemlist>
                <AnimalItem.AddButton ><AiFillPlusCircle  onClick={() => Action(-1,"/AddAnimal")}></AiFillPlusCircle></AnimalItem.AddButton>
              </AnimalItem.Itemlist>
              <div className="ButtonSlide">
                <AnimalItem.AddTitleContainer>
                  <AnimalItem.AddTitle size="md">{LangContextx.AddAnimal}</AnimalItem.AddTitle>
                </AnimalItem.AddTitleContainer>
            </div>
            </SlideContainer>
          </motion.div>
      </Carousel>: <SpanText>Loading</SpanText>
}
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
const SlideContainer = styled(motion.div)`
position: relative;
width: ${(props)=>props.data < 3 ? "33.33%!important" : ""};
margin-left: ${(props)=>props.data < 3 ? "33.33%" : ""};
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: ${(props)=>props.data < 3 ? "100%!important" : ""};
  margin-left: ${(props)=>props.data < 3 ? "0%" : ""};
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
