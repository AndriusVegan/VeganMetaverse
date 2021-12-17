import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ use, logout }) {
  return (
    <Image
      className="rounded-full bg-black cursor-pointer"
      src={`https://avatar.dicebears.com/api/pixel-art${
        username // user..get('user)
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}

export default Avatar;
