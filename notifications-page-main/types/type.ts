export interface Base {
  timestamp: string;
  username: string;
  isRead: boolean;
}

export interface Follow extends Base {
  type: "follow";
}

export interface Comment extends Base {
  type: "comment";
  image: string;
}

export interface Reaction extends Base {
  type: "reaction";
  post?: string;
}

export interface GroupJoin extends Base {
  type: "group_join";
  group?: string;
}

export interface Message extends Base {
  type: "message";
  message?: string;
}

export interface GroupLeave extends Base {
  type: "group_leave";
  group?: string;
}

export enum Content {
  "Reaction" = "reacted to your recent post",
  "Follow" = "followed you",
  "Join" = "has joined your group",
  "Message" = "sent you a private message",
  "Leave" = "left the group",
  "Comment" = "commented on your picture",
}

export type Notification = Reaction | GroupJoin | Message | GroupLeave | Follow | Comment;
