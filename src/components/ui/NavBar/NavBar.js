import React from "react";
import {
  AiOutlineSetting,
  AiOutlineCalendar,
  AiOutlineProfile,
} from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import perro from "../../../assets/icon/Animal Solid/PNG/240 x 240/toucan, beak, parrot.png";
const NavBar = () => {
  return (
    <NavContainer>
      <div className="Logo">
        <img src={perro}></img>
        <span>Animalib</span>
      </div>
      <ul>
        <li>
          <Link to="/">
            <AiOutlineCalendar></AiOutlineCalendar>
            <span>Agenda</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineProfile></AiOutlineProfile>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSetting></AiOutlineSetting>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  z-index: 5;
  padding-right: 10%;
  & .Logo {
    margin-left: 10px;
    height: 100%;
    & span {
      display: none;
    }
    & img{
        height:100%;
    }
  }
  & ul {
    margin-right: 10%;
    display: flex;
    & li {
      margin-left: 5%;
      & a {
        display: flex;
        color: ${(props) => props.theme.colors.secondary};
        & span{
            margin-left:5px;
        }
      }
    }
  }
`;
const styledLink = styled(Link)`
  display: flex;
`;
export default NavBar;
