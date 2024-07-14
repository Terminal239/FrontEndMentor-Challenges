import { CommentType } from "../data";
import VoteActions from "./VoteActions";
import Reply from "./Reply";
import { ReactNode } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  data: CommentType;
}

const MobileActionBar = ({ score }: { score: number }): ReactNode => {
  return (
    <div className="flex justify-between mt-4">
      <VoteActions count={score} />
      <button className="flex items-center font-medium gap-2 text-primary-moderateBlue">
        <img className="shrink-0 w-3 h-3" src="icon-reply.svg" alt="reply icon" /> Reply
      </button>
    </div>
  );
};

const DesktopActionBar = (): ReactNode => {
  return (
    <button className="ml-auto flex items-center font-medium gap-2 text-primary-moderateBlue">
      <img className="shrink-0 w-3 h-3" src="icon-reply.svg" alt="reply icon" /> Reply
    </button>
  );
};

const Comment = ({ data }: Props) => {
  const { width } = useWindowSize();
  const { content, score, createdAt, user, replies } = data;

  return (
    <div className="mb-4 last-of-type:mb-0 ">
      <div className="bg-white p-4 rounded-md flex md:p-6 gap-6">
        {width! > 768 && <VoteActions count={score} />}
        <div>
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 shrink-0" src={user.image.webp} alt={`photo of ${user.username}`} />
            <p className="text-neutral-darkBlue font-bold">{user.username}</p>
            <p className="text-neutral-grayishBlue">{createdAt}</p>
            {width! > 768 && <DesktopActionBar />}
          </div>
          <p className="text-neutral-grayishBlue mt-4">{content}</p>
          {width! <= 768 && <MobileActionBar score={score} />}
        </div>
      </div>
      <div className="border-l-2 border-neutral-lightGray pl-4 mt-4 md:ml-8 md:pl-8">
        {replies.map((reply) => (
          <Reply key={reply.id} {...reply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
