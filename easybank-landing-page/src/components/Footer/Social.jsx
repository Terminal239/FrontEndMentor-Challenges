import IconFacebook from "../Icons/IconFacebook";
import IconYoutube from "../Icons/IconYoutube";
import IconPinterest from "../Icons/IconPinterest";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";
import style from "./Social.module.css";

const Social = () => {
    return (
        <ul className={style.social}>
            <a href="#">
                <IconFacebook />
            </a>
            <a href="#">
                <IconYoutube />
            </a>
            <a href="#">
                <IconPinterest />
            </a>
            <a href="#">
                <IconTwitter />
            </a>
            <a href="#">
                <IconInstagram />
            </a>
        </ul>
    );
};

export default Social;
