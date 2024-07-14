import { useWindowSize } from "@uidotdev/usehooks";
import Comment from "./components/Comment.tsx";
import comments, { currentUser } from "./data.ts";

function App() {
  const { width } = useWindowSize();

  return (
    <div className="bg-neutral-veryLightGray p-4 max-w-[842px] mx-auto md:text-lg md:py-12">
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
      {width! < 768 ? (
        <div className="bg-white p-4 rounded-md">
          <textarea
            placeholder="Add a comment..."
            className="p-2 px-4 w-full resize-none border border-solid border-neutral-lightGray text-sm rounded"
            cols={0}
            rows={0}
          ></textarea>
          <div className="flex justify-between mt-4">
            <img className="w-8 h-8" src={`avatars/image-${currentUser}.webp`} alt="" />
            <button className="uppercase px-4 py-2 bg-primary-moderateBlue text-white font-medium text-sm rounded-md">Send</button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-md flex gap-4">
          <img className="w-10 h-10" src={`avatars/image-${currentUser}.webp`} alt="" />
          <textarea
            placeholder="Add a comment..."
            className="p-2 px-4 w-full resize-none border border-solid border-neutral-lightGray text-lg rounded"
            cols={0}
            rows={4}
          ></textarea>
          <button className="self-start uppercase px-6 py-3 bg-primary-moderateBlue text-white font-medium text-sm rounded-md">Send</button>
        </div>
      )}
    </div>
  );
}

export default App;
