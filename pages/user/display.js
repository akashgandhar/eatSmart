import React from "react";

export default function Display() {
  return (
    <div class="grid grid-cols-1  bg-gradient-to-r from-cyan-500 to-purple-500 h-auto p-5">
      <div class=" h-auto items-center mb-4 flex">
        <div class="group w-80 relative mx-auto overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div class="relative rounded-[15px] bg-white p-6">
            <div class="space-y-4">
              <img
                src="https://nuxt.com/assets/home/ux-fast-light.svg"
                alt=""
              />
              <p class="text-lg font-semibold text-slate-800">Hover me!</p>
              <p class="font-md text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                delectus temporibus est ut nisi nam at adipisci sunt dolore
                quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Nutrition label */}

      <div class="flex p-1 border-2 border-black font-sans w-1/3 item-center">
        <div class="text-4xl font-extrabold leading-none">Nutrition Facts</div>
       
        <div class="flex justify-between font-bold border-b-8 border-black">
        </div>
        <div class="flex justify-between items-end font-extrabold">
          <div>
            <div class="font-bold">Amount per serving</div>
            <div class="text-4xl">Calories</div>
          </div>
          <div class="text-5xl">45</div>
        </div>
        <div class="border-t-4 border-black text-sm pb-1">
          <div class="text-right font-bold pt-1 pb-1">% Daily value*</div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>
              <span class="font-bold">Total Fat</span> 8g
            </div>
            <div class="font-bold">10%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>Saturated Fat 1g</div>
            <div class="font-bold">5%</div>
          </div>
          <hr class="border-gray-500" />
          <div>
            <span class="italic">Trans Fat</span> 8g
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>
              <span class="font-bold">Cholesterol</span> 0mg
            </div>
            <div class="font-bold">0%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>
              <span class="font-bold">Sodium</span> 160mg
            </div>
            <div class="font-bold">7%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>
              <span class="font-bold">Total Carbohydrate</span> 37g
            </div>
            <div class="font-bold">13%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div class="pl-4">Dietary Fiber 4g</div>
            <div class="font-bold">14%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="pl-4">
            Total Sugar 12g
            <div class="pl-4">
              <hr class="border-gray-500" />
              <div class="flex justify-between">
                <div>Includes 10g Added Sugars</div>
                <div class="font-bold">20%</div>
              </div>
            </div>
          </div>
          <hr class="border-gray-500" />
          <div>
            <span class="font-bold">Protein</span> 3g
          </div>
        </div>
        <div class="border-t-8 border-black pt-1 text-sm">
          <div class="flex justify-between">
            <div>Vitamin D 2mcg</div>
            <div>10%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>Calcium 260mg</div>
            <div>20%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>Iron 8mg</div>
            <div>45%</div>
          </div>
          <hr class="border-gray-500" />
          <div class="flex justify-between">
            <div>Potassium 240mg</div>
            <div>6%</div>
          </div>
          <div class="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
            <div class="pr-1">*</div>
            <div>
              The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </div>
          </div>
        </div>
      </div>

      {/* card part */}
      {/* <!-- component --> */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* <script>
    tailwind.config = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
        },
    },
    plugins: [],
}
</script> */}
    </div>
  );
}
