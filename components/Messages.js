import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MIN_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .addAscending("createdAt")
        .greaterThanOrEqualTo(
          "createdAt",
          new Date(Date.now() - MIN_DURATION * 60 * 1000)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        I
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p> You are upto date {user.getUsername()} ! </p>
      </div>
    </div>
  );
}

export default Messages;
