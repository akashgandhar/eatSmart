import UserContext from "@/components/context/userContext";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { db, storage } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

  const u = useContext(UserContext);

  const [disease, setDisease] = useState("Select Disease");

  const [saveor, setSavour] = useState(1);

  const [size, setSize] = useState(0);

  const [data, setData] = useState([]);

  const [dNuetrient, setDNuetrient] = useState([]);

  const GetdNuetrients = async () => {
    if (!disease) {
      alert("select disease");
    } else {
      try {
        const docRef = doc(db, `Disease_Data`, disease);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          setDNuetrient(docSnap.data());
        }
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const GetDSize = async () => {
    try {
      const docRef = collection(db, `users/${u}/diseases`);
      const docSnap = await getDocs(docRef);
      if (docSnap.size > 0) {
        setSize(docSnap.size);
        console.log(size);
      }
    } catch {}
  };

  const GetDList = async () => {
    try {
      const docRef = collection(db, `Disease_Data`);
      const docSnap = await getDocs(docRef);
      var list = [];
      docSnap.forEach((doc) => {
        list.push(doc.data().Disease_Name);
      });
      setData(list);
    } catch {}
  };

  const factor = [1.8, 1.4, 1, 0.6, 0.2];

  const sendDisease = async () => {
    if (!disease || !saveor) {
      alert("Enter Missing Details");
    } else {
      try {
        const docRef = `users/${u}/diseases`;
        await setDoc(doc(db, docRef, "disease"), {
          Name: disease,
          Saverity: saveor,
          Carbohydrate: dNuetrient.Carbohydrate * factor[saveor - 1],
          Energy: dNuetrient.Energy * factor[saveor - 1],
          Proteins: dNuetrient.Proteins * factor[saveor - 1],
          Saturated_Fat: dNuetrient.Saturated_Fat * factor[saveor - 1],
          Sodium: dNuetrient.Sodium * factor[saveor - 1],
          Sugar: dNuetrient.Sugar * factor[saveor - 1],
          Total_Fat: dNuetrient.Total_Fat * factor[saveor - 1],
          Trans_Fat: dNuetrient.Trans_Fat * factor[saveor - 1],
        }).then(() => {
          alert("success");
          router.push("/user/mainHome");
        });
      } catch (e) {
        console.error("Error adding Data: ", e.message);
      }
    }
  };

  const router = useRouter();

  useEffect(() => {
    // console.log(u);

    GetdNuetrients();
    console.log(dNuetrient);

    GetDList();

    // if (size > 0) {
    //   router.replace("/user/mainHome");
    // } else {
    //   GetDSize();
    // }
  }, [size, disease]);

  const [pick, setPick] = useState(false);

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
                    <div className=" justify-center rounded-xl p-2">
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
                                className=" m-1 flex items-center justify-center hover:cursor-pointer h-24 w-40 hover:scale-105  bg-gradient-to-br from-sky-100  to-sky-300 font-bold text-2xl rounded-xl"
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
                <div className="m-4 ">
                  <div className="flex w-full text-xl justify-center font-bold mb-4">
                    Disease Severity
                  </div>
                  <div class="slidecontainer w-full ">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={saveor}
                      class={`slider w-full  `}
                      id="myRange"
                      onChange={(e) => {
                        setSavour(e.target.value);
                      }}
                    />
                    <div className="flex w-full ">
                      <div className="w-1/4">1</div>
                      <div className="w-1/4">2</div>
                      <div className="w-1/4">3</div>
                      <div>4</div>
                      <div className="w-1/4 text-right">5</div>
                    </div>

                    <div className="flex w-full h-auto justify-center mt-5">
                      <button
                        onClick={sendDisease}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
