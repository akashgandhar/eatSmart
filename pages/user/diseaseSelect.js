import UserContext from "@/components/context/userContext";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { db, storage } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function Bmi() {
  const [gender, setGender] = useState();
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [bmi, setBmi] = useState();

  const GetBmi = async () => {
    const docRef = doc(db, `users`, user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      setBmi(docSnap.data().BMI);
    }
  };

  const [disease, setDisease] = useState("Select Disease");

  const [saveor, setSavour] = useState(0);

  const data = [
    "Asthma",
    "Diabetes",
    "Kidney Stones",
    "Cancer",
    "Fatty-Liver",
    "Asthma",
    "Diabetes",
    "Kidney Stones",
    "Cancer",
    "Fatty-Liver",
  ];

  const router = useRouter();

  // useEffect(() => {
  //   GetBmi().then(() => {
  //     if (bmi) {
  //       router.push("/user/mainHome");
  //     }
  //   });
  // }, [bmi]);

  const [pick, setPick] = useState(false);
  const [picks, setPickS] = useState(false);

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-sky-50 to-gray-500 p-4 ">
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-8/12">
            <div class="rounded-xl bg-white shadow-xl">
              <div class="p-6 sm:p-16">
                {/* <div class="space-y-4">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    // loading="lazy"
                    class="w-10"
                    alt="tailus logo"
                  />
                  <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to unlock the <h1> best of EatSmart.</h1>
                  </h2>
                </div> */}
                <div class="mt-16 grid space-y-4">
                  <button
                    onClick={() => {
                      setPick(!pick);
                    }}
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      {/* <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        class="absolute left-0 w-5"
                        alt="google logo"
                      /> */}

                      <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        {disease}
                      </span>
                    </div>
                  </button>
                </div>
                {pick && (
                  <div className="p-4 w-full rounded-2xl ">
                    <div className="bg-gradient-to-br from-sky-50 to-blue-500 justify-center rounded-xl p-2 ">
                      <ScrollMenu>
                        {data.map((e, index) => {
                          return (
                            <>
                              <div
                                onClick={() => {
                                  setDisease(e);
                                  setPick(false);
                                }}
                                key={index}
                                className=" m-1 flex items-center justify-center hover:cursor-pointer h-24 w-40 hover:scale-105  bg-gradient-to-r  to-red-600 font-bold text-2xl rounded-xl"
                              >
                                {e}
                              </div>
                            </>
                          );
                        })}
                      </ScrollMenu>
                    </div>
                  </div>
                )}
                <div className="m-4">
                  <div class="slidecontainer w-full">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      value={saveor}
                      class="slider w-full"
                      id="myRange"
                      onChange={(e) => {
                        setSavour(e.target.value);
                      }}
                    />
                  </div>
                  {/* <input 
                    type="range"
                    min="0"
                    max="5"
                    value="3"
                    className="range range-secondary w-full slider"
                  /> */}
                </div>

                <div class="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p class="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" class="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" class="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p class="text-xs">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="#" class="underline">
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" class="underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
