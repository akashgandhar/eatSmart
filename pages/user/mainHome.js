import UserContext from "@/components/context/userContext";
import React, { useContext } from "react";

export default function MainHome() {
  const user = useContext(UserContext);
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-50 to-gray-200">
      {user}
    </div>
  );
}
