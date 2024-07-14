import NotificationElement from "./components/NotificationElement";
import data from "../data";

function App() {
  return (
    <div className="bg-lightGrayishBlue2-400 h-full md:p-8 flex items-center justify-center">
      <div className="mx-auto max-w-2xl rounded-md bg-white p-4 md:px-8">
        <div className="mb-4 flex items-center gap-2">
          <p className="text-xl font-bold">Notifications</p>
          <p className="rounded-md bg-blue-400 px-3 font-bold text-white ">3</p>
          <button className="text-darkGrayishBlue-400 ml-auto text-sm hover:text-blue-400">Mark all as read</button>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((notification) => (
            <NotificationElement notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
