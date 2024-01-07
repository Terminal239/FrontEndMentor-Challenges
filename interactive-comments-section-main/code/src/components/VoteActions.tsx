interface Props {
  count: number;
}

const VoteActions = ({ count }: Props) => {
  return (
    <div
      className="flex shrink-0 md:flex-col md:self-start bg-neutral-lightGray rounded-md overflow-hidden md:items-center px-3 py-2 gap-2 md:py-3 md:px-1 md:gap-3 md:basis-[40px]
    "
    >
      <button>
        <img src="icon-plus.svg" alt="" />
      </button>
      <p className="text-primary-moderateBlue font-medium px-2">{count}</p>
      <button>
        <img src="icon-minus.svg" alt="" />
      </button>
    </div>
  );
};

export default VoteActions;
