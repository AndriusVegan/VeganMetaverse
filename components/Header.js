import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";
// import veganLogo from "../assets/vegan-logo.png";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 text-pink-500 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end ">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="rounded-full object-cover"
            // src="https://links.papareact.com/3pi"
            // src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-vegan-healthy-food-and-vegan-justicon-flat-justicon.png"
            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-vegan-plant-based-diet-soft-fill-soft-fill-juicy-fish-12.png"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className=" text-3xl"> Welcome to Vegan Metaverse</h1>
          <h2 className=" text-5xl font-bold, truncate pb-1">
            {user.getUsername()}
          </h2>
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
