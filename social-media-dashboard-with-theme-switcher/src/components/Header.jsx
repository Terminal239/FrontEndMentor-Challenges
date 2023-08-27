import React from "react";
import { Info, ThemeToggle, Label, Button, Container } from "./styled/Header.styled";
import { MaxWidthContainer } from "./styled/Container.style.js";

const Header = ({ currentTheme, onClickToggle }) => {
  return (
    <Container>
      <MaxWidthContainer>
        <Info>
          <h1>Social Media Dashboard</h1>
          <Label>Total Followers: 23,004</Label>
        </Info>
        <ThemeToggle>
          <Label>Dark Mode</Label>
          <Button $state={currentTheme === "light" ? "left" : "right"} onClick={onClickToggle} />
        </ThemeToggle>
      </MaxWidthContainer>
    </Container>
  );
};

export default Header;
