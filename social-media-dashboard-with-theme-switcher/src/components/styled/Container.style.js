import { styled } from "styled-components";

const MaxWidthContainer = styled.div`
  max-width: 1200px;
  padding-inline: 16px;
  margin-inline: auto;

  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.bgColor};
    z-index: -2;
  }
`;

export { MaxWidthContainer };
