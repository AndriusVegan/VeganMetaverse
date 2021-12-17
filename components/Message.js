import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message() {
  const { useMoralis } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div className={`flex items-end space-x-2 relative`}>
      <div
        className={`flex space-x-4 p-3 rounded-lg
      `}
      >
          <TimeAgo
          className={`text-[10px]`} />   
        <div className="relative space-x-4">
          <Avatar />
        </div>
        <p className={`absolute bottom-5 text-xs`}>{message.get("message")}</p>
      </div>
    </div>
  );
}

export default Message;
