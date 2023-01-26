import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { useRouter } from "next/router";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
