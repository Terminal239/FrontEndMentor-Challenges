import React, { useState } from "react";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { MaxWidthContainer } from "./components/styled/Container.style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styled/Theme.style";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const handleToggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      document.documentElement.style.setProperty("--body-background", "var(--very-dark-blue-bg)");
    } else {
      setCurrentTheme("light");
      document.documentElement.style.setProperty("--body-background", "var(--white-bg)");
    }
  };

  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <Header currentTheme={currentTheme} onClickToggle={handleToggleTheme} />
        <main>
          <MaxWidthContainer>
            <Dashboard />
            <Overview currentTheme={currentTheme} />
          </MaxWidthContainer>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
