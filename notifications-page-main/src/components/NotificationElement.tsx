import { ReactNode } from "react";
import { Content, Notification } from "../../types/type";

interface Props {
  notification: Notification;
}

const VarReact = ({ post }: { post: string }) => {
  return <span className="ml-1 cursor-pointer font-bold hover:text-blue-400">{post}</span>;
};

const VarGroup = ({ group }: { group: string }) => {
  return (
    <a className="ml-1 font-bold text-blue-400" href="#">
      {group}
    </a>
  );
};

const NotificationElement = ({ notification }: Props) => {
  let content: string = "";
  let additional: ReactNode = null;

  switch (notification.type) {
    case "comment":
      content = Content.Comment;
      break;
    case "follow":
      content = Content.Follow;
      break;
    case "group_join":
      content = Content.Join;
      additional = <VarGroup group={notification.group!} />;
      break;
    case "group_leave":
      content = Content.Leave;
      additional = <VarGroup group={notification.group!} />;
      break;
    case "message":
      content = Content.Message;
      break;
    case "reaction":
      content = Content.Reaction;
      additional = <VarReact post={notification.post!} />;
      break;
  }

  return (
    <div className={`text-darkGrayishBlue-400 flex gap-4 rounded-md ${!notification.isRead ? "bg-gray-400" : ""} p-4`}>
      <img className="h-12 w-12 shrink-0" src={`avatar-${notification.username}.webp`} alt={`image of ${notification.username}`} />
      <div className="w-full">
        <div className="flex gap-4">
          <div className="text-sm">
            <p>
              <span className="text-veryDarkBlue-400 font-bold capitalize">{notification.username.split("-").join(" ")}</span> {content}
              {(notification.type === "reaction" || notification.type === "group_join" || notification.type === "group_leave") && additional}
              {!notification.isRead && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-red-400"></span>}
            </p>
            <p className="text-grayishBlue-400">{notification.timestamp}</p>
          </div>
          {notification.type === "comment" && (
            <img
              className="outline-lightGrayishBlue2-400 relative top-1 ml-auto h-8 w-8 cursor-pointer rounded-md outline-1 outline-offset-2 hover:outline md:h-12 md:w-12"
              src={notification.image}
              alt={`image of ${notification.image}`}
            />
          )}
        </div>
        {notification.type === "message" && (
          <div className="hover:bg-lightGrayishBlue2-400 mt-4 cursor-pointer rounded-md border px-3 py-2">
            <p className="text-sm">{notification.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationElement;
