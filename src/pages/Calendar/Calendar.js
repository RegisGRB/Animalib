import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import fakedata from "../Profile/fakedata";
import Form from "../../components/ui/Form/Form";
import * as AnimalItem from "../../components/elements/AnimalItem";
import { useHistory } from "react-router-dom";
import {LangContext} from "../../context";
import SpanText from "../../components/elements/SpanText";
import MotionModal from "../../components/Motion/MotionModal";
import { AiOutlineEdit,AiTwotoneCalendar,AiOutlineRollback,AiFillPlusCircle } from "react-icons/ai";
const Calendar = () => {
  const LangContextx = React.useContext(LangContext);
  const [Edit,setEdit] = React.useState(false);
  const [EditValue,setEditValue] = React.useState({});
  const [Add,setAdd] = React.useState(false);
  const [Events,setEvents] = React.useState(
    [
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
    {Animal:"Raki",title:"Vétérinaire",start:"2021-02-13T00:42",comment:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"},
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
      AAnimal: {
        name: "Animal",
        as: "select",
        value: Edit ? EditValue.Animal : "",
        option: AnimalsName,
        required: true,
      },
      AEvents: {
        name: "Event",
        as: "select",
        value: Edit ? EditValue.title : "",
        option: ["Medicament","Vaccin","Consultation"],
        required: true,
      },
      ACalendar: {
        name: "Calendar",
        type: "datetime-local",
        placeholder: LangContextx.Name,
        value: Edit ? EditValue.start : "",
        required: true,
      },
      AComment: {
        name: "Comment",
        as: "textarea",
        placeholder: "Comment",
        value: Edit ? EditValue.comment : "",
        required: false,
      },
      ASubmit: {
        type: "Submit",
        value: LangContextx.Submit,
      },
    };

    const ActionForm = () =>{
        if(Edit===true){
          console.log(EditValue.id); // EditValue = all the value of the animal
            // EDIT FORM ACTION
        }else{
          // ADD FORM ACTION
        }
    }
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
       <SpanText size="md">{LangContextx.Events}</SpanText>
         <ListEventItem>
            {Events.map((ev, index) => (
                <EventItem ><EventItemTitle size="sm" >{ev.Animal}</EventItemTitle><EventItemTitle size="sm">{ev.title}</EventItemTitle><EventItemTitle size="sm">{ev.start.toLocaleString()}</EventItemTitle><EventItemTitle size="sm" onClick={()=>{setEditValue(ev);setEdit(true);setAdd(true)}}><AiOutlineEdit></AiOutlineEdit></EventItemTitle></EventItem>
              ))}
        </ListEventItem>
       </DateContainer>

      </EditContainer>
      <AddButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>setAdd(!Add)} Add={Add}><AiFillPlusCircle></AiFillPlusCircle></AddButton>
      <MotionModal controller={Add}>
          <AddContainer>
            <FormContainer>
              <SpanText>{Edit ? LangContextx.Edit : LangContextx.Add}{LangContextx.Events}</SpanText>
              <Form className="AniForm" Fields={AnimalFields} Action={ActionForm}></Form>
            </FormContainer>
        </AddContainer>
        </MotionModal>
      <AnimalItem.BackButton as={motion.div} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,ease: [0.43, 0.13, -0.23, 0.9],delay:0.6}}} exit={{opacity:0,transition:{duration:0.4,ease: [0.43, 0.13, -0.23, 0.9]}}} onClick={()=>history.push("/Profile")}><AiOutlineRollback></AiOutlineRollback></AnimalItem.BackButton>
</motion.div>
  );

};


const AddButton = styled(AnimalItem.BackButton)`
top:40px;
right:40px;
left:unset;
width:70px;
height:70px;
z-index:999999999999;
font-size:1.5rem;
transform:${(props) => props.Add ? "rotate(45deg)": ""};
border-color:${(props) => props.Add ? "red": ""};
&:hover{
  transform:${(props) => props.Add ? "rotate(45deg) scale(1.1)": "scale(1.1)"};
}
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  top:unset;
  left:unset;
  bottom:20px;
  right:20px;
  width:40px;
  height:40px;
}
`;

const DateContainer = styled(motion.div)`
width:70%;
height:80%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
@media (max-width: ${(props) => props.theme.breakpoints.md}) {
  width: 100%;
}
`;

const ListEventItem = styled(motion.ul)`
width: 90%;
overflow-Y: auto;
overflow-X: hidden;
&::-webkit-scrollbar {
  width: 0px;
}
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
width:90vw;
height:100vh;
margin: 0 5vw 0 5vw;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;
const FormContainer = styled(motion.div)`
    width: 90%;
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
    height: 90vh;
    bottom: 0;
    top: unset;
    margin: 5vh 5vw;
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
