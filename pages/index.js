import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black">
      <Head>
        <title>Vegan Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div></div>

      <h1> Welcome to Vegan Metaverse</h1>
      <button onClick={logout}> Logout</button>

      
    </div>
  );
}
