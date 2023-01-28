import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { useRouter } from "next/router";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../footer";
import Header from "../header";

const UserState = (props) => {
  const [user, setUser] = useState("null");
  const router = useRouter();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user.displayName);
        } else {
          console.log("logged out ");
          router.push("/");
        }
      });

    }, [auth]);

  const data = user;

  return (
    <UserContext.Provider value={data}><Header />{props.children}<Footer/></UserContext.Provider>
  );
};

export default UserState;
