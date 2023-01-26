import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { use, useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("null");
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");

  const [eye, setEye] = useState(false);

  const handlesignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setUser(user);
        updateProfile(user, {
          displayName: name,
        }).then(async () => {
          try{

            await setDoc(doc(db, "users", name), {
              Name: name,
              Email: email,
            });
          }catch(e){
            alert(e.message)
          }
          
        }).then(()=>{
          alert("success")
          router.push("/login")
        })

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };

  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/eat-smartz.appspot.com/o/bg-01.jpg?alt=media&token=a08299a0-2250-4504-8329-d074bb381628')",
        backgroundSize: "cover",
      }}
    >
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div class="w-full px-6 py-3">
                <div>
                  <div class="mt-3 text-left sm:mt-5">
                    <div class="inline-flex items-center w-full">
                      <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                        Sign Up
                      </h3>
                    </div>
                    <div class="mt-4 text-base text-gray-500">
                      <p>Sign up to fit yourself.</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 space-y-2">
                  <div>
                    <label for="name" class="sr-only">
                      Name
                    </label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      name="name"
                      id="email"
                      class="block w-full px-5 py-3 text-base text-neutral-900  transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div>
                    <label for="email" class="sr-only">
                      Email
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      name="email"
                      id="email"
                      class="block w-full px-5 py-3 text-base text-neutral-900  transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="relative">
                    <label for="password" class="sr-only">
                      Password
                    </label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type={eye ? "text" : "password"}
                      name="password"
                      id="password"
                      class="block w-full px-5 py-3 text-base text-neutral-900  transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                    />
                    <svg
                      onClick={() => {
                        setEye(!eye);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      class=" absolute top-1/2 right-3 -translate-y-1/2 hover:scale-110  cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </div>

                  <div class="flex flex-col mt-4 lg:space-y-2">
                    <button
                      onClick={handlesignup}
                      type="button"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign Up
                    </button>
                    <a
                      href="#"
                      type="button"
                      class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                    >
                      {" "}
                      Forgot your Password?
                    </a>
                  </div>
                </div>
              </div>
              <div class="order-first hidden w-full h-full lg:block">
                <img
                  class="object-cover h-full bg-cover rounded-l-lg"
                  src="https://images.unsplash.com/photo-1576021182211-9ea8dced3690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
