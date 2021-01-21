import React from 'react';
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft} from "react-icons/bs";

import MotionModal from '../Motion/MotionModal';
import AniForm from "./AniForm";

const AniFormModal = ({controller,setController}) => {
    return (
        <MotionModal
        controller={controller}
        hidden={[0, "-100vw", 1]}
        show={[0,0, 1]}
      >
        <SignContainerLog>
          <SyledIcons
            as={BsArrowLeft}
            onClick={() => setController(!controller)}
          ></SyledIcons>
          <AniForm></AniForm>
        </SignContainerLog>
      </MotionModal>
    );
};
const SignContainerLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  width: 50vw;
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100vw;
  }
`;
const SyledIcons = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  position: absolute;
    top: 10%;
    font-size: 5rem;
    left: 5%;
  cursor:pointer;
`;

export default AniFormModal;