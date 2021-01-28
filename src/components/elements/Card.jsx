import React from "react";
import styled from "styled-components";
import StyledTheme from "../StyledComponents/StyledTheme";

const Card = ({ size, title, children,width,...props }) => {

  return (
    <StyledCard size={size} width={width}>
      <StyledCardContent>
        <StyledCardTitle as="span" fontcolorinvert={true} opacity={0.6}>
          {title}
        </StyledCardTitle>
        <StyledCardChildren> {children}</StyledCardChildren>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;

const ThemeSize = ({ theme, size }) => {
  switch (size) {
    case "sm":
      return `${theme.card.sm * ThemeMultiSize()}px`;
    case "md":
      return `${theme.card.md * ThemeMultiSize()}px`;
    case "lg":
      return `${theme.card.lg * ThemeMultiSize()}px`;
    case "xl":
      return `${theme.card.xl * ThemeMultiSize()}px`;
    default:
      return `${theme.card.md * ThemeMultiSize()}px`;
  }
};

const ThemeMultiSize = () => {
  var width = Math.max(window.screen.width, window.innerWidth);
  if (width <= 640) return 1;
  if (width <= 768) return 1.2;
  if (width <= 1500) return 2;
  if (width <= 1920) return 2.5;
  if (width > 1920) return 3;

  return 1;
};
const StyledCardTitle = styled(StyledTheme)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontsize.sm};
`;
const StyledCardContent = styled(StyledTheme)`
  width: 90%;
  height: 90%;
  padding:10px;
`;
const StyledCardChildren = styled(StyledTheme)`
margin-top: 10px;
margin-bottom: 10px;
`;
const StyledCard = styled(StyledTheme)`
  overflow: hidden;
  position: relative;
  min-height: 40px;
  min-width: 30px;
  display:flex;
  border-radius: 5px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.fontprimary};;
  transition: border-color 0.3s, box-shadow 0.3s ease;
  box-shadow: 0 0 0 4px rgb(108 41 245 / 0.05);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  width: ${(props) => (props.width ? props.width : "100%")};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;
// max-width: ${(props) => ThemeSize(props)};
// max-height: ${(props) => ThemeSize(props)};