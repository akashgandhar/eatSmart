import Card from "components/card";
import PicCard from "components/picCard";
import Quote from "components/quote";
import React from "react";

export default function Result() {
  const nutri = [
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
    {
      name: "carbs",
      color: "red",
      value: "500",
      serve: "100",
      severity: "basic",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f7fafc" }}>
      <PicCard />
      {/* <Quote/> */}
      <div class="flex flex-col bg-transparent mx-auto p-auto justify-around ">
        <h1 class="flex text-center py-5 m-auto font-bold text-2xl text-gray-800">
          NUTRITION PROFILE
        </h1>
        <div class="flex overflow-x-scroll  pb-10 hide-scroll-bar ">
          <div class="flex flex-nowrap ">
            {nutri.map((e, index) => {
              return (
                <div key={index} class="inline-block px-3 w-full">
                  <Card
                    color={e.color}
                    name={e.name}
                    severity={e.severity}
                    value={e.value}
                    serve={e.serve}
                  />
                  {/* <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
