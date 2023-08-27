import React from "react";
import {
  Counter,
  Username,
  Label,
  Trend,
  ItemHeader,
  Item,
  Container,
} from "./styled/Dashboard.style.js";

import { ReactComponent as FacebookLogo } from "../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../assets/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../assets/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icon-youtube.svg";
import { ReactComponent as UpIcon } from "../assets/icon-up.svg";
import { ReactComponent as DownIcon } from "../assets/icon-down.svg";

const Dashboard = () => {
  return (
    <Container>
      <Item $company="facebook">
        <ItemHeader>
          <FacebookLogo />
          <Username>@nathanf</Username>
        </ItemHeader>
        <Counter>1987</Counter>
        <Label>Followers</Label>
        <Trend $upward>
          <UpIcon /> 99 Today
        </Trend>
      </Item>
      <Item $company="twitter">
        <ItemHeader>
          <TwitterLogo />
          <Username>@nathanf</Username>
        </ItemHeader>
        <Counter>1044</Counter>
        <Label>Followers</Label>
        <Trend $upward>
          <UpIcon /> 99 Today
        </Trend>
      </Item>
      <Item $company="instagram">
        <ItemHeader>
          <InstagramLogo />
          <Username>@realnathanf</Username>
        </ItemHeader>
        <Counter>11k</Counter>
        <Label>Followers</Label>
        <Trend $upward>
          <UpIcon /> 1099 Today
        </Trend>
      </Item>
      <Item $company="youtube">
        <ItemHeader>
          <YoutubeLogo />
          <Username>Nathan F.</Username>
        </ItemHeader>
        <Counter>8239</Counter>
        <Label>Subscribers</Label>
        <Trend $downward>
          <DownIcon /> 144 Today
        </Trend>
      </Item>
    </Container>
  );
};

export default Dashboard;
