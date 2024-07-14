import utils from "../../utils.module.css";
import "./Header.css";

const Header = ({ children }) => {
    const classes = [utils.flex].join(" ");
    return (
        <header className={classes} style={{ "--gap": "1rem" }}>
            {children}
        </header>
    );
};

export default Header;
