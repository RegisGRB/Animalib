import React from "react";
import { AiOutlineEdit,AiOutlineRollback } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import fakedata from "../Profile/fakedata";
import { useParams } from "react-router-dom";
import Form from "../../components/ui/Form/Form";
import * as AnimalItem from "../../components/elements/AnimalItem";
import { useHistory } from "react-router-dom";
import {LangContext} from "../../context";
import ThemeSwitcher from "../../components/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../components/ui/LangSwitcher/LangSwitcher";
import SpanText from "../../components/elements/SpanText";
const Calendar = () => {
  const LangContextx = React.useContext(LangContext);
  const [Events,setEvents] = React.useState(
    [
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
    {Animal:"Raki",title:"Vétérinaire",start:new Date()},
  ]);
  let history = useHistory();


  const GetsAnimal = () =>{
    let x = [];
 fakedata.animal.map((el, index) => (
   x.push(el.name)
 ))
 return x;
  }
  const AnimalsName = GetsAnimal();
    const AnimalFields = {
      // Login Fields
      ASelect: {
        name: "Animal",
        as: "select",
        value: "",
        option: AnimalsName,
        required: true,
      },
      ACalendar: {
        type: "datetime-local",
        placeholder: LangContextx.Name,
        value: "",
        required: true,
      },
      ASubmit: {
        type: "Submit",
        value: LangContextx.Submit,
      },
    };
  return (
<motion.div>
    <AnimalItem.UserContainer initial={{y:window.innerHeight/3 }} exit={{y: 0,opacity:0.7}} transition={{duration: 0.2}}>
        <AnimalItem.UserTitle as={motion.span} size="lg"  >{fakedata.firstname}</AnimalItem.UserTitle>
        <AnimalItem.EditUserButton><AiOutlineEdit></AiOutlineEdit></AnimalItem.EditUserButton>
      </AnimalItem.UserContainer>
      <EditContainer
        initial="initialliItem"
        animate="liItemafter"
        exit="liItemexit"
        variants={variants}
      >
        
       <DateContainer>
       <SpanText size="md">Events</SpanText>
         <ListEventItem>
         <EventItem><EventItemTitle size="sm">Name</EventItemTitle><EventItemTitle size="sm">Title</EventItemTitle><EventItemTitle size="sm">Date</EventItemTitle></EventItem>

            {Events.map((ev, index) => (
                <EventItem><EventItemTitle size="sm">{ev.Animal}</EventItemTitle><EventItemTitle size="sm">{ev.title}</EventItemTitle><EventItemTitle size="sm">{ev.start.toLocaleString()}</EventItemTitle></EventItem>
              ))}
        </ListEventItem>
       </DateContainer>
          <AddContainer>
            <SpanText>Add Animal Events</SpanText>
          <Form className="AniForm" Fields={AnimalFields}></Form>
        </AddContainer>
      </EditContainer>
      <AnimalItem.BackButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>history.push("/Profile")}><AiOutlineRollback></AiOutlineRollback></AnimalItem.BackButton>
</motion.div>
  );
};

const DateContainer = styled(motion.div)`
width:100%;
height:80%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;
const ListEventItem = styled(motion.ul)`
width: 90%;
overflow-Y: auto;
overflow-X: hidden;
`;
const EventItemTitle = styled(SpanText)`
color:${(props) => props.theme.colors.primary};

`;
const EventItem = styled(motion.li)`
font-size: 14px;
padding: 16px 0px 16px 0px;
border-radius: 5px;
background:${(props) => props.theme.colors.secondary};
cursor: pointer;
margin: 5px;
display:flex;
justify-content:space-around;
&::first-child{
  margin-top:200px;
}
`;
const AddContainer = styled(motion.div)`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
const EditContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  pointer-events: all;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
    height: 65vh;
    bottom: 0;
    top: unset;
    margin: 10vh 5vw;
    left: 0;
    right: unset;
    flex-direction:column;
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
    initialliItem: {
      y: 1000,
    },
    liItemafter: {
      y: 0,
      transition: transition,
    },
    liItemexit: {
      y: 1000,
      transition: { ...transition, delay: 0},
    },
  };

export default Calendar;
