import { ReactNode, useState } from "react";
import { currentUser } from "../data";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import VoteActions from "./VoteActions";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

interface ActionBarProps {
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  score?: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileActionBar = ({ user, score, setShowModal }: ActionBarProps): ReactNode => {
  return (
    <div className="flex justify-between mt-4">
      <VoteActions count={score!} />
      {currentUser !== user.username ? (
        <button className="flex items-center font-medium gap-1.5 text-primary-moderateBlue">
          <img className="shrink-0 w-3 h-3" src="icon-reply.svg" alt="reply icon" /> Reply
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <button onClick={() => setShowModal(true)} className="flex items-center font-medium gap-1.5 text-primary-softRed">
            <img className="shrink-0 w-3 h-3" src="icon-delete.svg" alt="reply icon" /> Delete
          </button>
          <button className="flex items-center font-medium gap-1.5 text-primary-moderateBlue">
            <img className="shrink-0 w-3 h-3" src="icon-edit.svg" alt="reply icon" /> Edit
          </button>
        </div>
      )}
    </div>
  );
};

const DesktopActionBar = ({ user, setShowModal }: ActionBarProps): ReactNode => {
  return currentUser !== user.username ? (
    <button className="flex items-center font-medium gap-1.5 text-primary-moderateBlue ml-auto">
      <img className="shrink-0 w-3 h-3" src="icon-reply.svg" alt="reply icon" /> Reply
    </button>
  ) : (
    <div className="flex items-center gap-6 ml-auto ">
      <button onClick={() => setShowModal(true)} className="flex items-center font-medium gap-1.5 text-primary-softRed">
        <img className="shrink-0 w-3 h-3" src="icon-delete.svg" alt="reply icon" /> Delete
      </button>
      <button className="flex items-center font-medium gap-1.5 text-primary-moderateBlue">
        <img className="shrink-0 w-3 h-3" src="icon-edit.svg" alt="reply icon" /> Edit
      </button>
    </div>
  );
};

const Reply = ({ id, content, createdAt, score, replyingTo, user }: Props) => {
  const { width } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md flex md:p-6 gap-6 mb-4 md:mb-4 last-of-type:mb-0">
      {width! >= 768 && <VoteActions count={score} />}
      <div key={id} className="bg-white rounded-md mb-4 last-of-type:mb-0">
        <div>
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 shrink-0" src={user.image.webp} alt={`photo of ${user.username}`} />
            <p className="text-neutral-darkBlue font-bold">{user.username}</p>
            {user.username === currentUser && <p className="bg-primary-moderateBlue text-sm px-1.5 text-white font-bold rounded-sm leading-none pt-0.5 pb-1">you</p>}
            <p className="text-neutral-grayishBlue">{createdAt}</p>
            {width! >= 768 && <DesktopActionBar user={user} setShowModal={setShowModal} />}
          </div>
        </div>
        <p className="text-neutral-grayishBlue mt-4">
          <span className="text-primary-moderateBlue mr-1 font-bold">@{replyingTo}</span>
          {content}
        </p>
        {width! < 768 && <MobileActionBar setShowModal={setShowModal} user={user} score={score} />}
        {showModal && createPortal(<Modal onClose={() => setShowModal(false)} />, document.body)}
      </div>
    </div>
  );
};

export default Reply;
