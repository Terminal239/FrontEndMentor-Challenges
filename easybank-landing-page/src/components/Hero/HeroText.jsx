import Button from "../Reusable/Button";
import classes from "./HeroText.module.css";

const HeroText = () => {
    return (
        <div className={classes.hero__text}>
            <h1> Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button styles={["btn-request"]}> Request Invite</Button>
        </div>
    );
};

export default HeroText;
