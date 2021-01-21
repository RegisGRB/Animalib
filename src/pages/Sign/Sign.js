import React from "react";
import styled from "styled-components";
import AniFormModal from "../../components/AniForm/AniFormModal";
import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import perro from "../../assets/icon/Animal Solid/PNG/240 x 240/toucan, beak, parrot.png";
import veto from "../../assets/vector/vec3.png";
import { StyledButton } from "../../components/StyledComponents";
//https://cdn.dribbble.com/users/692322/screenshots/3991441/aroma-8-6.png
const Sign = () => {
  const [LoginOn, setLoginOn] = React.useState(false);
  return (
    <SignContainer>
      {/* SIGN MODAL */}
      <AniFormModal
        controller={LoginOn}
        setController={setLoginOn}
      ></AniFormModal>
      {/* SIGN MODAL */}
      <div className="SignContainerInfo">
        <div className="ContainerInfo">
          <h1 class="InfoTitle">Animalib</h1>
          <div>
          <p className="InfoAbout">
            L’application Animalib est une application qui permet d’effectuer un
            suivi complet de son animal de compagnie, comme un carnet de santé
            dématérialisé, il permet un suivi de sa nutrition, de sa santé à
            travers l’espace vétérinaire et d’avoir une carte d’identité de son
            animal
          </p>
          </div>
          <div className="LoginInfoUser">
            <p className="InfoLogin">Welcome Please <span onClick={() => setLoginOn(!LoginOn)}>Login</span> to your account </p>
          </div>

        </div>
      </div>
      <div className="SignContainerHero"></div>
    </SignContainer>
  );
};
// CONTAINER
const SignContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  & .SignContainerHero {
    width: 100%;
    height: 100%;
    background: url(https://jardinage.lemonde.fr/images/dossiers/2019-09/perroquet-ara-133925.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(50%);
    background-position: center;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      display: none;
    }
  }
  & .SignContainerInfo {
    width: 100%;
    height: 100%;
    position: relative;
    & .ContainerInfo {
      margin-top: 10%;
      margin-left: 10%;
      margin-right: 10%;
      margin-bottom: 20%;
      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 30%;
      }
      & .InfoTitle {
        z-index: 1;
        color: ${(props) => props.theme.colors.secondary};
        font-size: 8em;
        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          font-size: 3rem;
        }
      }
      & .InfoAbout {
        z-index: 1;
        color: ${(props) => props.theme.colors.secondary};
        width: 50%;
        margin-top: 5%;
        line-height: 24px;
        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          width: 100%;
        }
      }
      & .LoginInfoUser {
        position: absolute;
        bottom: 10%;
        & .InfoLogin {
          color: ${(props) => props.theme.colors.secondary};
          margin-bottom: 5%;
        }
      }
    }
  }
`;

const Syledvector = styled.img`
  z-index: 0;
  position: absolute;
  filter: brightness(0.8);
  right: 10%;
  top: 40%;
`;

export default Sign;
