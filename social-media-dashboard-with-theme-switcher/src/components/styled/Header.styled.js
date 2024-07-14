import { keyframes, styled } from "styled-components";

const Info = styled.div`
  padding-block: 16px;

  h1 {
    font-size: var(--fs-550);
    color: ${(props) => props.theme.accentColor};
  }

  border-bottom: 1px solid var(--dark-grayish-blue-text);
`;

const Label = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
`;

const ThemeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
`;

const Button = styled.button`
  height: 24px;
  width: 56px;

  background-color: ${(props) => props.theme.toggle};
  background-image: ${(props) => props.theme.toggle};
  border: none;
  border-radius: 150px;

  &::before {
    content: "";
    display: block;
    position: relative;
    left: -2px;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.topBgPattern};

    transform: ${(props) => (props.$state === "left" ? "translateX(30px)" : "translateX(0px)")};
    -moz-transform: ${(props) =>
      props.$state === "left" ? "translateX(32px)" : "translateX(0px)"};
    transition: transform 0.5s ease;
  }
`;

const Container = styled.header`
  isolation: isolate;
  &::before {
    content: "";
    background-color: ${(props) => props.theme.topBgPattern};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 225px;
    z-index: -1;
  }
`;

export { Info, ThemeToggle, Label, Button, Container };
