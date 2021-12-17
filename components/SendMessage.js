import { useState } from "react";
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from " ./SendMessage";
import Message from "./Message";

const MIN_DURATION = 15;

function SendMessage({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery;

  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // message saved successfully
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10  bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl  rounded-full border-4 border-blue-400 ">
      <input
        className="flex-grow bg-transparent outline-none  text-white border-4 placeholder-gray-500 pr-5"
        value={message}
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        {" "}
        Send
      </button>

      <div>
        {data.map((message) => {
          <Message key={message.id} message={message} />;
        })}
      </div>
    </form>
  );
}

export default SendMessage;
