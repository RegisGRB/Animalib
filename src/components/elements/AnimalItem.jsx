import styled from "styled-components";
import SpanText from "./SpanText";
import { motion } from "framer-motion";
const Itemlist = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemName = styled(SpanText)`
  position: absolute;
  top: 50px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 40px;
    }
`;
const ItemSexe = styled(SpanText)`
  position: absolute;
  top: 90px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 40px;
    }
`;
const ItemPuce = styled(SpanText)`
  position: absolute;
  top: 110px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 40px;
    }
`;
const ItemSterile = styled(SpanText)`
  position: absolute;
  top: 130px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 40px;
    }
`;
const ItemPoids = styled(SpanText)`
  position: absolute;
  top: 150px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 40px;
    }
`;
const ItemButton = styled.div`
  position: absolute;
  width:30px;
  height:30px;
  background: unset;
  color:${(props) => props.theme.colors.secondary };
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  border:3px solid grey;
  font-weight: 800;
  border-style: dotted;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
  cursor:pointer;
  z-index:999;
  pointer-events:all;
  transition:all 0.6s ease-out;
  &:hover{
    transform:scale(1.2);
  }
`;
const UserContainer = styled(motion.div)`
display:flex;
position:absolute;
top: 20px;
width:100%;
align-items:center;
justify-content:center;
filter:brightness(0.7);
transition:all 0.6s ease-out;
&:hover{
  filter:brightness(4);
}
cursor:pointer;
`;
const UserTitle = styled(SpanText)`
font-weight:bold;

`;
const EditUserButton = styled(ItemButton)`
position:relative;
&:hover{
 transform:scale(1);
}
`;
const BackButton = styled(ItemButton)`
  top:40px;
  left:40px;
  width:70px;
  height:70px;
  font-size:1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left:unset;
    right:20px;
    width:40px;
    height:40px;
  }
`;
export {Itemlist,ItemName,ItemPoids,ItemSterile,ItemPuce,ItemSexe,ItemButton,UserContainer,UserTitle,EditUserButton,BackButton};
