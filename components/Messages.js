import { ByMoralis } from "react-moralis";

coonst { user } =useMoralis();

function Messages() {
  return (
    <div className="pp-56">
      <div className="my-5">
        {" "}
        I
        <ByMoralis style={{ marginLeft: "auto", marginRight: "auto" }} />
      </div>

      <div> </div>
      <div>
          <SendMessage />
      </div>
      <div className="p">
          <p> You are upto date </p>

      </div>
      <h1> I am vegan message </h1>
    </div>
  );
}

export default Messages;
