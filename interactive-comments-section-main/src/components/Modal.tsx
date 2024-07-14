interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/[0.4] isolate">
      <div className="p-6 bg-white relative z-1 rounded-md flex flex-col gap-4">
        <p className="font-medium text-lg">Delete comment</p>
        <p className="text-neutral-grayishBlue">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="flex gap-3">
          <button className="px-4 pt-2.5 pb-3.5 uppercase bg-neutral-grayishBlue text-white font-medium rounded-md" onClick={onClose}>
            No, cancel
          </button>
          <button className="px-4 pt-2.5 pb-3.5 uppercase bg-primary-softRed text-white font-medium rounded-md" onClick={onClose}>
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
