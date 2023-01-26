import UserContext from "@/components/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";

export default function Bmi() {
  const user = useContext(UserContext);
  return (
    <>
      <div>name</div>
      <div>height</div>
      <div>weight</div>
      <div>Bmi</div>
      {/* <div>skip</div> */}
      <Link href="/foodCheck">skip</Link>
      <Link href="/foodCheck">submit</Link>



      <p>you are logged in as --------  {user}</p>
    </>
  );
}
