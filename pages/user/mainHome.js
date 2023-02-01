import UserContext from "@/components/context/userContext";
import { storage } from "@/firebase";
import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import axios from "axios";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Modal from "react-modal";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Router, useRouter } from "next/router";

export default function MainHome() {
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [list1, setList] = useState([]);
  const router = useRouter();
  const [uri, setUri] = useState();
  const [data, setData] = useState();
  const [pList, setPList] = useState([]);

  const key = "5e4a30603e21445a83f41e84a687ccc2";
  const endpoint = "https://eat-smart.cognitiveservices.azure.com/";

  const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({
      inHeader: {
        "Ocp-Apim-Subscription-Key": key,
      },
    }),
    endpoint
  );

  const checkPic = async (link) => {
    const tagsURL =
      "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg";

    const tags = (
      await computerVisionClient.analyzeImage(link, {
        visualFeatures: ["Tags"],
      })
    ).tags;

    formatTags(tags);
    // console.log(`Tags: ${formatTags(tags)}`);

    function formatTags(tags) {
      var list = [];
      tags.map((tag) => {
        list.push(tag);
      });
      setPList(list);
      console.log("done");
      console.log(list1);
      // .map((tag) => `${tag.name} (${tag.confidence.toFixed(2)})`)
      // .join(", ");
    }

    // Optionally the request above could also be done as
  };

  function handleTakePhoto(dataUri) {
    // console.log(dataUri);
    setOpen(false);
  }

  function handleTakePhotoAnimationDone(dataUri) {
    // Do stuff with the photo...
    closeModal();

    const storageRef = ref(storage, "images/test.jpg");

    const metadata = {
      contentType: "image/jpeg",
    };

    // const uploadTask = uploadBytes(storageRef, file, metadata);

    uploadString(storageRef, dataUri, "data_url", metadata)
      .then((snapshot) => {
        console.log("Uploaded a data_url string!");
      })
      .then(() => {
        getDownloadURL(storageRef).then((url) => {
          // console.log(url);
          setUri(url);
          checkPic(url);
        });
        alert("uploaded");
      });

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

  useEffect(() => {
    console.log(uri);
  }, [uri]);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className=" w-full">
        {/* {open ? (
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
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            idealResolution={{ width: 640, height: 480 }}
            imageType={IMAGE_TYPES.JPG}
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
              openModal()
            }}
            style={{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/128/2870/2870536.png')",
              backgroundSize: "cover",
            }}
            class="hover:opacity-70 hover:cursor-pointer flex justify-center items-center m-auto rounded-full w-44 h-44 "
          ></div>
        )} */}
      </div>

      <div>
        <div
          onClick={() => {
            setOpen(!open);
            openModal();
          }}
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/128/2870/2870536.png')",
            backgroundSize: "cover",
          }}
          class="hover:opacity-70 hover:cursor-pointer flex justify-center items-center m-auto rounded-full w-44 h-44 "
        ></div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          animationType="slide"
          backdropColor="white"
          position="center"
          dismissable={false}
        >
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
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            idealResolution={{ width: 640, height: 480 }}
            imageType={IMAGE_TYPES.JPG}
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
        </Modal>
      </div>

      <div className="flex items-center justify-center w-auto py-3">
        <div className=" w-1/2 rounded-2xl">
          <div className=" justify-center rounded-xl p-2">
            <ScrollMenu>
              {pList.map((e,index) => {
                return (
                  <div key={index} className="flex w-28" id="jj">
                    <button
                      onClick={() => {
                        router.push({ pathname: "/user/display", query: e });
                      }}
                      id="jj"
                      class="bg-indigo-500 hover:bg-indigo-600 w-full text-white font-bold py-2 px-2 rounded mx-1"
                    >
                      {e.name}
                    </button>
                  </div>
                );
              })}
            </ScrollMenu>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 bg-white h-12 rounded-lg justify-center border-2  border-blue-500  shadow-sm focus-within:shadow-inner">
          <input
            onChange={(e) => {
              setData(e.target.value);
            }}
            type="text"
            name="last-name"
            id="last-name"
            class="h-full peer block w-full rounded-lg border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
            placeholder=" Enter the Food Name"
          />
        </div>
      </div>
      <div class="flex space-x-2 justify-center">
        <button
          onClick={() => {
            if (!data) {
              alert("Input Food Name First");
            } else {
              router.push({pathname:"/user/display",query:data});
            }
          }}
          // onClick={() => {
          //   if (!uri) {
          //     alert("click a picture first");
          //   } else {
          //     checkPic();
          //   }
          // }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="mb-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </>
  );
}
