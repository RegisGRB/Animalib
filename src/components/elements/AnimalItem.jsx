import styled from "styled-components";
import SpanText from "./SpanText";

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
`;
const ItemSexe = styled(SpanText)`
  position: absolute;
  top: 90px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
`;
const ItemPuce = styled(SpanText)`
  position: absolute;
  top: 110px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
`;
const ItemSterile = styled(SpanText)`
  position: absolute;
  top: 130px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
`;
const ItemPoids = styled(SpanText)`
  position: absolute;
  top: 150px;
  left: 85px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
`;
const ItemButton = styled.div`
  position: absolute;
  width:30px;
  height:30px;
  background: ${(props) => props.theme.colors.secondary };
  color:${(props) => props.theme.colors.primary };
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  border:3px solid grey;
  font-weight: 800;
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

export {Itemlist,ItemName,ItemPoids,ItemSterile,ItemPuce,ItemSexe,ItemButton};
