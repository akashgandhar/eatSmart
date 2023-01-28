import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/eat-smartz.appspot.com/o/bg-01.jpg?alt=media&token=a08299a0-2250-4504-8329-d074bb381628')",
        backgroundSize: "cover",
      }}
      class="flex w-screen flex-row justify-center items-center px-6"
    >
      <header
        className="flex w-full items-center justify-center"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/eat-smartz.appspot.com/o/bg-01.jpg?alt=media&token=a08299a0-2250-4504-8329-d074bb381628')",
          backgroundSize: "cover",
        }}
      >
        <img className="h-20 w-20" src="/Logo_EatSmart3.svg" />
        {/* <div className="right-0"> */}

        {/* </div> */}
      </header>
      {auth.currentUser && <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            })
            .then(() => {
              router.push("/");
            });
        }}
        class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        LogOut
      </button>}
    </div>
  );
}
