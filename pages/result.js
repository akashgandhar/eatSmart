import { Button } from '@mui/material'
import axios from 'axios'
import Card from 'components/card'
import PicCard from 'components/picCard'
import Quote from 'components/quote'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

export default function Result() {
  const [foodData, setFoodData] = useState([])
  const router = useRouter()
  const q = router.query
  const percentage = 66
  const [pNutrients, setPNutrients] = useState([])

  const checkFood = async () => {
    const response = await axios
      .get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${q.name}&pageSize=2&api_key=MbsrjC89NMdhdbDn7Rwu5Mb6Sh1v4u5beYP8dayn`,
      )

      .catch((e) => {
        console.log(e)
      })

    try {
      setFoodData(response.data.foods[0])
      setPNutrients(response.data.foods[0].foodNutrients)
    } catch (e) {
      console.log(e)
    }
    // console.log(foodData)

    // setPNutrients(foodData.foodNutrients)
    // console.log(response.data.foods)
  }

  const nutri = [
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
    {
      name: 'carbs',
      color: 'red',
      value: '500',
      serve: '100',
      severity: 'basic',
    },
  ]

  useEffect(() => {
    checkFood()
    // console.log(foodData)
    // console.log(pNutrients)
  }, [foodData])

  return (
    <div style={{ backgroundColor: '#f7fafc' }}>
      {/* <Button
        onClick={() => {
          checkFood()
        }}
        variant="outlined"
      >
        fghj
      </Button> */}
      <PicCard
        image={q.image}
        name={q.name}
        disc={foodData ? foodData.foodCategory : 'NIL'}
        disc2={foodData ? foodData.foodCategory : 'NIL'}
      />

      {/* piccard */}

      <div class="flex flex-col bg-transparent mx-auto p-auto justify-around ">
        <h1 class="flex text-center py-5 m-auto font-bold text-2xl text-gray-800">
          NUTRITION PROFILE
        </h1>

        <div class="flex overflow-x-scroll  pb-10 hide-scroll-bar ">
          <div class="flex flex-nowrap ">
            {pNutrients.map((e, index) => {
              if (e.value > 0) {
                return (
                  <div key={index} class="inline-block px-3 w-full">
                    <Card
                      // data={{pNutrients}}
                      color={e.color}
                      name={e.nutrientName}
                      severity={e.severity}
                      value={e.value}
                      serve={e.unitName}
                    />
                    {/* <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div> */}
                  </div>
                )
              }
            })}
          </div>
        </div>
        <Quote />
      </div>
    </div>
  )
}
