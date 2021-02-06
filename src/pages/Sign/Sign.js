import React from "react";
import styled from "styled-components";
import AniFormModal from "../../components/AniForm/AniFormModal";
import { motion } from "framer-motion";
import Auth from "../../utils/Auth";
import { useHistory, Redirect } from "react-router-dom";
import {LangContext} from "../../context";
import LangSwitcher from "../../components/ui/LangSwitcher/LangSwitcher";

const Sign = () => {
  const LangContextx = React.useContext(LangContext);
  const [LoginOn, setLoginOn] = React.useState(false);

  let history = useHistory();

  if(Auth.isLoggedIn()) {
    console.log("logged");
    history.push("/Profile");
  }

  return (
    <SignContainer
      exit={{ opacity: 0 }}
      transition={{ ease: [0.43, 0.13, -0.23, 0.9], duration: 0.6 }}
    >
      <LangSwitcher></LangSwitcher>
      {/* SIGN MODAL */}
      <AniFormModal
        controller={LoginOn}
        setController={setLoginOn}
      ></AniFormModal>
      {/* SIGN MODAL */}
      {/* Explication animalib */}
      <SignContainerInfo>
        <ContainerInfo>
          <InfoTitle>  {LangContextx.Title}</InfoTitle>
          <div>
            <InfoAbout>
             {LangContextx.SignAbout}
            </InfoAbout>
          </div>
          <LoginInfoUser>
            <InfoLogin>
            {LangContextx.SignTextLogin1}{" "}
              <InfoLoginSpan onClick={() => setLoginOn(!LoginOn)}>
                {LangContextx.SignLogin}
              </InfoLoginSpan>{" "}
              {LangContextx.SignTextLogin2}{" "}
            </InfoLogin>
          </LoginInfoUser>
        </ContainerInfo>
      </SignContainerInfo>
      {/* Explication animalib */}
      {/* Image Remplissage a droite */}
      <SignContainerHero></SignContainerHero>
      {/* Image Remplissage a droite */}
    </SignContainer>
  );
};



const SignContainerInfo = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
  }
  position: relative;
`;
const ContainerInfo = styled.div`
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 20%;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: 30%;
  }
`;
const InfoTitle = styled.h1`
  z-index: 1;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 8em;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;
const InfoAbout = styled.p`
  z-index: 1;
  color: ${(props) => props.theme.colors.secondary};
  width: 50%;
  margin-top: 5%;
  line-height: 24px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
  }
`;
const LoginInfoUser = styled.div`
  position: absolute;
  bottom: 10%;
`;
const InfoLogin = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 5%;
`;
const InfoLoginSpan = styled.span`
  color: ${(props) => props.theme.colors.third};
  cursor: pointer;
`;

const SignContainerHero = styled.div`
  width: 50%;
  height: 100%;
  background: url(https://jardinage.lemonde.fr/images/dossiers/2019-09/perroquet-ara-133925.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(50%);
  background-position: center;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const SignContainer = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
export default Sign;
