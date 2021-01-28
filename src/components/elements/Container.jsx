import React from "react";
import { useSize } from "../../Hooks";
import styled from "styled-components";

const Container = ({ children }) => {
  const screenWidth = useSize().width;
  React.useEffect(() => {

  }, [screenWidth]);
  return (
    <StyledContainer>
     {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default Container;
