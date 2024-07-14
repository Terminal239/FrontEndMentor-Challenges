import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icon-pinterest.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icon-youtube.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icon-instagram.svg";

const Socials = () => {
  return (
    <div className="socials">
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
      <YoutubeIcon />
      <InstagramIcon />
    </div>
  );
};

export default Socials;
