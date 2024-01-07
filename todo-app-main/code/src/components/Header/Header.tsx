import { useContext, useState } from "react";
import ThemeLightIcon from "../../assets/icon-sun.svg";
import ThemeDarkIcon from "../../assets/icon-moon.svg";
import { ThemeContext } from "../../App";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Form from "./Form";

interface Props {
  handleAddTodo: (event: React.SyntheticEvent, task: string) => void;
  setTheme: (theme: string) => void;
}

const Header = ({ handleAddTodo, setTheme }: Props) => {
  const theme = useContext(ThemeContext);
  const [task, setTask] = useState<string>("");

  return (
    <section className={`header background-${theme}`}>
      <MaxWidthWrapper>
        <div className="form-container">
          <div className="header-top">
            <h1>Todo</h1>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <img src={theme === "light" ? ThemeDarkIcon : ThemeLightIcon} alt="" />
            </button>
          </div>
          <Form />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Header;
