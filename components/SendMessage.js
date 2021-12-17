import { useState } from "react";
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from " ./SendMessage";
import Message from "./Message";

const MIN_DURATION = 15;

function SendMessage() {
  const { user, Moralis } = useMoralis();
  const endOfMessageRef = useRef(null)
  const { data, loading, error } = useMoralisQuery

  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
      e.preventDefault();
      if(!message) return;

      const Messages = Moralis.Object.extend('Messages');
      const messages = new Messages();

      messages.save{{
          message: message,
          username: user.getUsername(),
          ethAddress: user.get('ethAddress')
      }}

      setMessage('')
  }
  return (
    <form className="flex w-11/12 fixed bottom-10 opacity-80  max-w-2xl ">
      <input className="bg-transparent outline-none z-50  text-white border-4" 
      value={message}
      type='text'
      onChange={(e) => setMessage(e.target.value) }

      />
      <button> </button>

      <div>
          {data.map(message => {
              <Message  key={message.id} message={message}/>
          })}
      </div>
    </form>
  );
}

export default SendMessage;
