import UserContext from "@/components/context/userContext";
import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import React, { useContext, useEffect, useState } from "react";
// import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useRouter } from "next/router";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";
// import { Camera, CameraResultType } from "@capacitor/camera";
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import { storage } from "@/firebase";
import { Button } from "@mui/material";

export default function MainHome() {
  const u = useContext(UserContext);
  const router = useRouter();
  const [product, setProduct] = useState([]);

  // const [open, setOpen] = useState(false);
  // const [list1, setList] = useState([]);
  // const [uri, setUri] = useState();
  // const [data, setData] = useState();
  // const [pList, setPList] = useState([]);

  const key = "455ea10821d3493883d20c8635763e2f";
  const endpoint = "https://eat-smart-paid.cognitiveservices.azure.com/";

  const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({
      inHeader: {
        "Ocp-Apim-Subscription-Key": key,
      },
    }),
    endpoint
  );

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 1,
      width: 360,
      height: 640,
    }).then((uri) => {
      console.log(uri);
      // checkPic(uri);
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(storage, "images/test.jpeg");

      try {
        uploadString(storageRef, uri.dataUrl, "data_url", metadata)
          .then((snapshot) => {
            console.log("Uploaded a data_url string!");
          })
          .then(() => {
            getDownloadURL(storageRef).then((url) => {
              console.log(url);
              // setUri(url);
              checkPic(url);
            });
            alert("uploaded");
          });
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const checkPic = async (link) => {
    const tagsURL =
      "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg";

    const tags = (
      await computerVisionClient
        .analyzeImage(link, {
          visualFeatures: ["Tags"],
        })
        .catch((e) => {
          alert(e);
        })
    ).tags;

    formatTags(tags);
    // console.log(tags);

    function formatTags(tags) {
      var list = [];
      tags.map((e) => {
        console.log(e);
        list.push(e.name);
      });
      setProduct(list);
    }
  };

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <div class="relative py-16 bg-transparent">
          <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 h-auto">
            <div class="m-auto h-auto ">
              <div class="rounded-xl bg-white shadow-xl">
                <div class="p-6">
                  <div class="flex items-center px-2 py-3 bg-white rounded-full shadow">
                    <button class="text-gray-500 hover:text-gray-700">
                      <CameraAltIcon
                        onClick={addNewToGallery}
                        className="hover:opacity-80"
                      />
                    </button>
                    <input
                      type="text"
                      class="flex-1 px-2 py-1 text-gray-700 focus:outline-none focus:shadow-outline"
                      placeholder="Search"
                    />
                  </div>
                  {product.length > 0 && (
                    <div class="flex items-center px-2 py-3 bg-white rounded-xl shadow">
                      <div className="h-auto max-h-64 w-full overflow-y-scroll ">
                        {product.map((e, index) => {
                          return (
                            // <button className="p-3 border-b border-gray-200 w-full">
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <Button
                                key={index}
                                className="p-3 border-b border-gray-200 w-full"
                                variant=""
                              >
                                {e}
                              </Button>
                              <Button
                                key={index}
                                // className="p-3 border-b border-gray-200 w-full"
                                variant=""
                              >
                                <SendIcon />
                              </Button>
                            </div>
                            // </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
