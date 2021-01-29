import React from 'react';
import styled from "styled-components";

import { BsArrowLeft} from "react-icons/bs";
import MotionModal from '../Motion/MotionModal';
import AniForm from "./AniForm";
import { motion } from 'framer-motion';

const AniFormModal = ({controller,setController}) => {
    return (
      // Modal d'apparition du login et registe
        <MotionModal
        controller={controller}
        hidden={[0, "-100%", 1]}
        show={[0,0, 1]}
      >
        <SignContainerLog>
          <SyledIcons
            as={BsArrowLeft}
            onClick={() => setController(!controller)}
          ></SyledIcons>
          <AniForm></AniForm>{/* Form du login et register*/}
        </SignContainerLog>
      </MotionModal>
    );
};
const SignContainerLog = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  width: 50vw;
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
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