import React from "react";

export default function Header() {
  return (
    <div class="flex flex-row justify-center items-center">
      <header className="flex w-full items-center justify-center"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/eat-smartz.appspot.com/o/bg-01.jpg?alt=media&token=a08299a0-2250-4504-8329-d074bb381628')",
          backgroundSize: "cover",
        }}
      >
        <img className="h-20 w-20" src="/Logo_EatSmart3.svg" />
      </header>
    </div>
  );
}
