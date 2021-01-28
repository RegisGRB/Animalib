import React from "react";
import styled from "styled-components";

const Row = ({ children, wrap, flexdirection, width }) => {
  return (
    <StyledRow wrap={wrap} flexdirection={flexdirection} width={width}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: ${(props) => (props.notwrap ? "" : "wrap")};
  flex-direction: ${(props) => (props.flexdirection ? "column" : "row")};
  width: ${(props) => (props.width ? props.width : "100%")};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
export default Row;
