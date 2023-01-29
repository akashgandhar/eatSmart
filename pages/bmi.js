import UserContext from "@/components/context/userContext";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { db, storage } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

export default function Bmi() {
  const [gender, setGender] = useState();
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [bmi, setBmi] = useState();

  const GetBmi = async () => {
    try {
      const docRef = doc(db, `users`, user);
      const docSnap = await getDoc(docRef);

      if (docSnap.data().BMI > 0) {
        router.replace("/user/diseaseSelect");
      }
    } catch {}
  };

  const router = useRouter();

  useEffect(() => {
    GetBmi();
  }, [bmi]);

  const user = useContext(UserContext);
  const [image, setImage] = useState("nil");
  const [imgUrl, setImgUrl] = useState(
    "https://st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg"
  );

  const handleUpload = (img) => {
    const storageRef = ref(storage, `${user}/pic.jpg`);
    const file = img;
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },

      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        alert("uploaded");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const UpdateProfile = async () => {
    if (!fname || !lname || !gender || !height || !weight) {
      alert("Enter Missing Details");
    } else {
      try {
        const docRef = `users`;
        await updateDoc(doc(db, docRef, user), {
          First_Name: fname,
          Last_Name: lname,
          Gender: gender,
          Height: height,
          Weight: weight,
          Name: fname + " " + lname,
          BMI:
            Number(weight) / ((Number(height) / 100) * (Number(height) / 100)),
        }).then(() => {
          router.push("/user/diseaseSelect");
        });
      } catch (e) {
        console.error("Error adding Data: ", e.message);
      }
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1623150502742-6a849aa94be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
        }}
        class="min-h-screen w-full flex items-center justify-center bg-gray-50"
      >
        <div>
          {/* <h1 class="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">
            USER DETAILS<span class="text-sm text-purple-700"></span>
          </h1> */}

          <div className="flex items-center justify-center max-w-fit mx-auto pb-10">
            <img className="w-28 h-28 rounded-full object-cover" src={imgUrl} />
          </div>

          <div class="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
            <section class="flex items-center justify-center ">
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                id="company"
                type="file"
                placeholder="1111"
              />

              <button
                onClick={() => {
                  handleUpload(image);
                }}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Upload
              </button>
            </section>
            <div class="grid">
              <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300  shadow-sm focus-within:shadow-inner">
                <select
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  type="text"
                  class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                  placeholder=" Gender"
                >
                  <option>Please Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <label
                  html="first-name"
                  class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                >
                  Gender
                </label>
              </div>
            </div>

            <div class="grid">
              <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300  shadow-sm focus-within:shadow-inner">
                <input
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                  placeholder=" First Name"
                />
                <label
                  html="last-name"
                  class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                >
                  First name
                </label>
              </div>
            </div>
            <div class="grid">
              <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300  shadow-sm focus-within:shadow-inner">
                <input
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                  placeholder=" Last Name"
                />
                <label
                  html="last-name"
                  class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                >
                  Last name
                </label>
              </div>
            </div>
            <div class="grid">
              <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300  shadow-sm focus-within:shadow-inner">
                <input
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  type="number"
                  name="last-name"
                  id="last-name"
                  class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                  placeholder=" Height In Centimeter"
                />
                <label
                  html="company"
                  class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                >
                  Height In Centimeter
                </label>
              </div>
            </div>
            <div class="grid">
              <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300  shadow-sm focus-within:shadow-inner">
                <input
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                  type="number"
                  name="email"
                  id="email"
                  class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                  placeholder=" Weight"
                />
                <label
                  html="weight"
                  class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                >
                  Weight in KG
                </label>
              </div>
            </div>
            <button
              onClick={UpdateProfile}
              type="submit"
              class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
            >
              Submit
            </button>
            <div
              type="submit"
              class={`mt-4 ${
                !(
                  Number(weight) /
                  ((Number(height) / 100) * (Number(height) / 100))
                )
                  ? "bg-orange-400"
                  : "bg-green-500"
              } ${
                Number(weight) /
                  ((Number(height) / 100) * (Number(height) / 100)) <
                  18.5 ||
                Number(weight) /
                  ((Number(height) / 100) * (Number(height) / 100)) >
                  24.99
                  ? "bg-red-500"
                  : "bg-green-500"
              } text-white  py-2 px-6 rounded-md `}
            >
              BMI :{" "}
              {Math.round(
                Number(weight) /
                  ((Number(height) / 100) * (Number(height) / 100))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
