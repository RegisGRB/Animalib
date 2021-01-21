import styled from "styled-components";
const StyledButton = styled.button`
font-size:14px;
padding:16px 30px 16px 30px;
background:${(props) =>  props.theme.colors.secondary };
color:${(props) =>  props.theme.colors.primary };
border:1px solid ${(props) =>  props.theme.colors.secondary };
border-radius:5%;
cursor:pointer;
`;


export default StyledButton;







