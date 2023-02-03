import React from 'react'

export default function Card({ color, severity, name, value, serve }) {
  return (
    <div class=" flex items-center justify-between p-4 hover:scale-105 transition ease-in-out delay-150  hover:-translate-y-1   duration-300 rounded-lg bg-white shadow-indigo-50 shadow-md">
      <div className="w-full p-4">
        <h2 class="text-gray-900 text-lg font-bold">{name}</h2>
        <h3
          // style={{ color: { red } }}
          class="mt-2 text-xl font-bold text-red-500  text-left "
        >
          {value}
        </h3>
        <p class="text-sm font-semibold text-gray-400">Unit: {serve}</p>
      </div>
      <div
        // style={{ backgroundColor: `${color}` }}
        class=" w-36 h-20  rounded-full bg-red-500 shadow-2xl shadow-red-500 border-white  border-dashed border-2  flex justify-center items-center "
      >
        <div>
          <h1 class="text-white text-2xl">{"sever.."}</h1>
        </div>
      </div>
    </div>
  )
}
