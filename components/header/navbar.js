import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import { useLottie } from "lottie-react";
// import animationData from "../../utils/button.json";
import animationData from "../../utils/btn.json";
import UserContext from "components/context/userContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(options);

  const u = useContext(UserContext);
  const router = useRouter();
  return (
    <nav style={{ backgroundColor: "#f7fafc" }} className="bg-transparent ">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto" />
        </Link>

        {/* <h1
          class="
         font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Eat Smart
        </h1> */}
        {!u ? <ul className="flex">
          <li onClick={() => {
            router.push("/register")
          }} className="hover:cursor-pointer hover:scale-95 shadow-md rounded-3xl w-full  right-0">
            {View}
          </li>
        </ul> :
          <ul className="flex">
            <li className="hover:cursor-pointer hover:scale-95 shadow-md rounded-3xl w-full  right-0">
              {/* {View} */}<Avatar alt="Cindy Baker" className="" />
            </li>
          </ul>}
      </div>
    </nav>
  );
};

export default Navbar;
