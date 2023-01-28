import UserContext from "@/components/context/userContext";
import { storage } from "@/firebase";
import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function MainHome() {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const [uri, setUri] = useState();
  const [data, setData] = useState();

  const key = "5e4a30603e21445a83f41e84a687ccc2";
  const endpoint = "https://eat-smart.cognitiveservices.azure.com/";

  const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": key } }),
    endpoint
  );

  const checkPic = async () => {
    const tagsURL =
      "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg";

    const tags = (
      await computerVisionClient.analyzeImage(tagsURL, {
        visualFeatures: ["Tags"],
      })
    ).tags;

    alert(`Tags: ${formatTags(tags)}`);

    function formatTags(tags) {
      return tags
        .map((tag) => `${tag.name} (${tag.confidence.toFixed(2)})`)
        .join(", ");
    }

    // Optionally the request above could also be done as
  };

  // function handleTakePhoto(dataUri) {
  //   // Do stuff with the photo...

  //   console.log("1");

  // }

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    // console.log("2");
    // setUri(dataUri);
    // console.log(dataUri);
    setOpen(false);

    const storageRef = ref(storage, `${user}/pic2.jpg`);
    const file = dataUri;
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setUri(downloadURL);
          console.log(downloadURL);
          alert("uploaded");
        });
      }
    );
  }

  function handleTakePhotoAnimationDone(dataUri) {
    // Do stuff with the photo...
    console.log("3");
  }

  function handleCameraError(error) {
    console.log("handleCameraError", error);
  }

  function handleCameraStart(stream) {
    console.log("handleCameraStart");
  }

  function handleCameraStop() {
    console.log("handleCameraStop");
  }

  useState(() => {
    console.log(uri);
  }, [uri]);

  return (
    <>
      <div className=" w-full">
        {open ? (
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
            onTakePhotoAnimationDone={(dataUri) => {
              handleTakePhotoAnimationDone(dataUri);
            }}
            onCameraError={(error) => {
              handleCameraError(error);
            }}
            // idealFacingMode={FACING_MODES.ENVIRONMENT}
            // idealResolution={{ width: 640, height: 480 }}
            // imageType={IMAGE_TYPES.JPG}
            imageCompression={0.97}
            isMaxResolution={true}
            isImageMirror={false}
            isSilentMode={false}
            isDisplayStartCameraError={true}
            isFullscreen={false}
            sizeFactor={1}
            onCameraStart={(stream) => {
              handleCameraStart(stream);
            }}
            onCameraStop={() => {
              handleCameraStop();
            }}
          />
        ) : (
          <div
            onClick={() => {
              setOpen(!open);
            }}
            style={{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/128/2870/2870536.png')",
              backgroundSize: "cover",
            }}
            class="hover:opacity-70 hover:cursor-pointer flex justify-center items-center m-auto rounded-full w-44 h-44 "
          ></div>
        )}
      </div>

      {/* <img src={uri}></img> */}

      <div class="flex justify-center">
        <div class="mb-3 bg-white h-12  justify-center border-2   border-blue-500  shadow-sm focus-within:shadow-inner">
          <input
            onChange={(e) => {
              setFName(e.target.value);
            }}
            type="text"
            name="last-name"
            id="last-name"
            class="h-full peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
            placeholder=" Enter the Food/Item"
          />
          <label
            html="last-name"
            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
          >
            First name
          </label>
        </div>
      </div>
      <div class="flex space-x-2 justify-center">
        <button
          onClick={() => {
            checkPic();
          }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Click me
        </button>
      </div>
    </>
  );
}
