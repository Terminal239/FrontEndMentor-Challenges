import React from "react";
import { ReactComponent as FacebookLogo } from "../assets/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../assets/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../assets/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../assets/icon-youtube.svg";
import { ReactComponent as UpIcon } from "../assets/icon-up.svg";
import { ReactComponent as DownIcon } from "../assets/icon-down.svg";
import {
  ItemLabel,
  ItemCounter,
  ItemTrend,
  OverviewItem,
  ItemContainer,
  Heading,
} from "./styled/Overview.styled";

const Overview = ({ currentTheme }) => {
  return (
    <div>
      <Heading $theme={currentTheme}>Overview-Today</Heading>
      <ItemContainer>
        <OverviewItem>
          <ItemLabel>Page Views</ItemLabel>
          <FacebookLogo />
          <ItemCounter>87</ItemCounter>
          <ItemTrend $upward>
            <UpIcon />
            3%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Likes</ItemLabel>
          <FacebookLogo />
          <ItemCounter>52</ItemCounter>
          <ItemTrend $downward>
            <DownIcon />
            2%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Likes</ItemLabel>
          <InstagramLogo />
          <ItemCounter>5462</ItemCounter>
          <ItemTrend $upward>
            <UpIcon />
            2257%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Profile Views</ItemLabel>
          <InstagramLogo />
          <ItemCounter>52k</ItemCounter>
          <ItemTrend $upward>
            <UpIcon />
            1375%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Retweets</ItemLabel>
          <TwitterLogo />
          <ItemCounter>117</ItemCounter>
          <ItemTrend $upward>
            <UpIcon />
            303%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Likes</ItemLabel>
          <TwitterLogo />
          <ItemCounter>507</ItemCounter>
          <ItemTrend $upward>
            <UpIcon />
            553%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Likes</ItemLabel>
          <YoutubeLogo />
          <ItemCounter>107</ItemCounter>
          <ItemTrend $downward>
            <DownIcon />
            19%
          </ItemTrend>
        </OverviewItem>
        <OverviewItem>
          <ItemLabel>Total Views</ItemLabel>
          <YoutubeLogo />
          <ItemCounter>1407</ItemCounter>
          <ItemTrend $downward>
            <DownIcon />
            12%
          </ItemTrend>
        </OverviewItem>
      </ItemContainer>
    </div>
  );
};

export default Overview;
