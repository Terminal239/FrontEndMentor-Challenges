import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
