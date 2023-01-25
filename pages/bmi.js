import Link from "next/link";
import React from "react";

export default function Bmi() {
  return (
    <>
      <div>name</div>
      <div>height</div>
      <div>weight</div>
      <div>Bmi</div>
      {/* <div>skip</div> */}
      <Link href="/foodCheck">skip</Link>
      <Link href="/foodCheck">submit</Link>
    </>
  );
}
