import { Notification } from "./types/type";

const data: Notification[] = [
  {
    type: "reaction",
    timestamp: "1m ago",
    username: "mark-webber",
    post: "My first tournament today!",
    isRead: false,
  },
  {
    type: "follow",
    timestamp: "5m ago",
    username: "angela-gray",
    isRead: false,
  },
  {
    type: "group_join",
    timestamp: "1 day ago",
    username: "jacob-thompson",
    group: "Chess Club",
    isRead: false,
  },
  {
    type: "message",
    timestamp: "5 days ago",
    username: "rizky-hasanuddin",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isRead: true,
  },
  {
    type: "comment",
    timestamp: "1 week ago",
    username: "kimberly-smith",
    image: "image-chess.webp",
    isRead: true,
  },
  {
    type: "reaction",
    timestamp: "2 weeks ago",
    username: "nathan-peterson",
    post: "5 end-game strategies to increase your win rate",
    isRead: true,
  },
  {
    type: "group_leave",
    timestamp: "2 weeks ago",
    username: "anna-kim",
    group: "Chess Club",
    isRead: true,
  },
];

export default data;
