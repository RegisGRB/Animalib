import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import SpanText from "../../components/elements/SpanText";
import { LangContext } from "../../context";
import LangSwitcher from "../../components/ui/LangSwitcher/LangSwitcher";

const NotFound = () => {
  const LangContextx = React.useContext(LangContext);
  let history = useHistory();
  return (
    <NotFoundContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, ease: [0.43, 0.13, -0.23, 0.9], duration: 0.6 }}
      exit={{ opacity: 0, ease: [0.43, 0.13, -0.23, 0.9], duration: 0.6 }}
    >
        <LangSwitcher></LangSwitcher>
      <NotFoundTitle size="lg">404</NotFoundTitle>
      <NotFoundTitle size="md">{LangContextx.NotFound}</NotFoundTitle>
      <NotFoundSafeBack size="md" onClick={() => history.push("/")}>
        {LangContextx.SafeBack}
      </NotFoundSafeBack>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NotFoundTitle = styled(SpanText)``;
const NotFoundSafeBack = styled(SpanText)`
  color: ${(props) => props.theme.colors.third};
  cursor: pointer;
`;

export default NotFound;
