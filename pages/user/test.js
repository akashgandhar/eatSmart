import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import React from "react";

export default function Test() {
  const set = () => {
    data.forEach(async (e, index) => {
      try {
        await setDoc(doc(db, "Product_Data", e.Product_Name), {
          Disease_Name: e.Product_Name,
          Energy: e.Energy,
          Proteins: e.Proteins,
          Carbohydrate: e.Carbohydrate,
          Sugar: e.Sugar,
          Total_Fat: e.Total_Fat,
          Saturated_Fat: e.Saturated_Fat,
          Trans_Fat: e.Trans_Fat,
          Sodium: e.Sodium,
        });
      } catch (e) {
        console.log(e.message);
      }
    });
    console.log("done");
  };

  return (
    <button
      onClick={() => {
        set();
      }}
    >
      Test
    </button>
  );
}

const data = [
  {
    Product_Name: "Kurkure",
    Energy: 558.0,
    Proteins: 6.4,
    Carbohydrate: 55.2,
    Sugar: 1.0,
    Total_Fat: 34.6,
    Saturated_Fat: 16.0,
    Trans_Fat: 0.1,
    Sodium: 0.892,
  },
  {
    Product_Name: "Uncle Chips",
    Energy: 536.0,
    Proteins: 6.4,
    Carbohydrate: 54.6,
    Sugar: 2.0,
    Total_Fat: 32.4,
    Saturated_Fat: 14.6,
    Trans_Fat: 0.1,
    Sodium: 0.868,
  },
  {
    Product_Name: "LAY'S",
    Energy: 555.0,
    Proteins: 7.2,
    Carbohydrate: 51.2,
    Sugar: 1.0,
    Total_Fat: 35.7,
    Saturated_Fat: 14.1,
    Trans_Fat: 0.1,
    Sodium: 0.815,
  },
  {
    Product_Name: "Bingo!",
    Energy: 548.0,
    Proteins: 6.0,
    Carbohydrate: 57.9,
    Sugar: 3.0,
    Total_Fat: 32.5,
    Saturated_Fat: 0.1,
    Trans_Fat: 15.4,
    Sodium: 0.8494,
  },
  {
    Product_Name: "Parle's Wafers",
    Energy: 562.0,
    Proteins: 8.3,
    Carbohydrate: 55.7,
    Sugar: 2.4,
    Total_Fat: 34.0,
    Saturated_Fat: 16.2,
    Trans_Fat: 0.0,
    Sodium: 0.8456,
  },
  {
    Product_Name: "Pringles Chips",
    Energy: 230.0,
    Proteins: 1.0,
    Carbohydrate: 15.0,
    Sugar: 1.0,
    Total_Fat: 9.0,
    Saturated_Fat: 2.5,
    Trans_Fat: 0.0,
    Sodium: 0.19,
  },
  {
    Product_Name: "Balaji Wafers",
    Energy: 554.0,
    Proteins: 7.7,
    Carbohydrate: 53.4,
    Sugar: 0.8,
    Total_Fat: 32.9,
    Saturated_Fat: 15.7,
    Trans_Fat: 0.7,
    Sodium: 0.385,
  },
  {
    Product_Name: "Haldiram's Chips",
    Energy: 542.0,
    Proteins: 6.0,
    Carbohydrate: 42.05,
    Sugar: 3.76,
    Total_Fat: 35.11,
    Saturated_Fat: 19.1,
    Trans_Fat: 0.0,
    Sodium: 0.624,
  },
  {
    Product_Name: "Kettle Studio",
    Energy: 508.3,
    Proteins: 11.8,
    Carbohydrate: 53.4,
    Sugar: 3.8,
    Total_Fat: 27.5,
    Saturated_Fat: 0.1,
    Trans_Fat: 15.4,
    Sodium: 0.0007,
  },
  {
    Product_Name: "Yellow Diamond",
    Energy: 530.1,
    Proteins: 7.05,
    Carbohydrate: 57.74,
    Sugar: 2.19,
    Total_Fat: 30.11,
    Saturated_Fat: 14.11,
    Trans_Fat: 0.0,
    Sodium: 0.42903,
  },
  {
    Product_Name: "BUDHANI BROS WAFERWALA",
    Energy: 178.0,
    Proteins: 4.63,
    Carbohydrate: 11.35,
    Sugar: 2.96,
    Total_Fat: 12.96,
    Saturated_Fat: 1.94,
    Trans_Fat: 0.0,
    Sodium: 0.144,
  },
  {
    Product_Name: "CORNITOS NACHOS CRISPS",
    Energy: 135.0,
    Proteins: 2.0,
    Carbohydrate: 19.0,
    Sugar: 1.0,
    Total_Fat: 6.0,
    Saturated_Fat: 1.0,
    Trans_Fat: 0.0,
    Sodium: 0.144,
  },
  {
    Product_Name: "CRAX",
    Energy: 100.0,
    Proteins: 6.0,
    Carbohydrate: 62.5,
    Sugar: 9.3,
    Total_Fat: 24.8,
    Saturated_Fat: 11.1,
    Trans_Fat: 0.1,
    Sodium: 0.85,
  },
  {
    Product_Name: "JACKER",
    Energy: 140.0,
    Proteins: 2.0,
    Carbohydrate: 18.0,
    Sugar: 3.0,
    Total_Fat: 7.0,
    Saturated_Fat: 3.0,
    Trans_Fat: 0.0,
    Sodium: 0.081,
  },
  {
    Product_Name: "TOO YUMM",
    Energy: 497.0,
    Proteins: 4.9,
    Carbohydrate: 6.7,
    Sugar: 4.2,
    Total_Fat: 23.4,
    Saturated_Fat: 10.7,
    Trans_Fat: 0.05,
    Sodium: 0.82,
  },
  {
    Product_Name: "McCain",
    Energy: 530.1,
    Proteins: 7.05,
    Carbohydrate: 57.74,
    Sugar: 2.19,
    Total_Fat: 30.11,
    Saturated_Fat: 14.11,
    Trans_Fat: 0.0,
    Sodium: 0.42903,
  },
  {
    Product_Name: "TEDHE MEDHE",
    Energy: 563.0,
    Proteins: 8.1,
    Carbohydrate: 53.6,
    Sugar: 3.1,
    Total_Fat: 35.2,
    Saturated_Fat: 0.1,
    Trans_Fat: 15.9,
    Sodium: 0.84,
  },
  {
    Product_Name: "Parle G",
    Energy: 451.0,
    Proteins: 78.2,
    Carbohydrate: 25.5,
    Sugar: 6.5,
    Total_Fat: 12.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Nimkin",
    Energy: 504.0,
    Proteins: 63.9,
    Carbohydrate: 37.6,
    Sugar: 5.7,
    Total_Fat: 25.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Krackjack",
    Energy: 489.0,
    Proteins: 70.5,
    Carbohydrate: 19.6,
    Sugar: 6.8,
    Total_Fat: 19.9,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "20-20 Cookies",
    Energy: 490.0,
    Proteins: 70.6,
    Carbohydrate: 23.2,
    Sugar: 6.4,
    Total_Fat: 20.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Monaco-Salted Craker",
    Energy: 484.0,
    Proteins: 70.2,
    Carbohydrate: 7.9,
    Sugar: 7.9,
    Total_Fat: 10.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Golden Arcs",
    Energy: 512.0,
    Proteins: 66.9,
    Carbohydrate: 38.4,
    Sugar: 4.5,
    Total_Fat: 25.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Kreams",
    Energy: 510.0,
    Proteins: 52.1,
    Carbohydrate: 33.6,
    Sugar: 4.2,
    Total_Fat: 21.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Festo",
    Energy: 502.0,
    Proteins: 51.0,
    Carbohydrate: 32.1,
    Sugar: 3.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Hide & Seek Choco Chips",
    Energy: 479.0,
    Proteins: 73.4,
    Carbohydrate: 32.2,
    Sugar: 5.9,
    Total_Fat: 18.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Top",
    Energy: 490.0,
    Proteins: 85.0,
    Carbohydrate: 18.2,
    Sugar: 6.5,
    Total_Fat: 19.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Hide & Seek Milano",
    Energy: 470.0,
    Proteins: 71.2,
    Carbohydrate: 30.5,
    Sugar: 5.4,
    Total_Fat: 18.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Happy Happy",
    Energy: 495.0,
    Proteins: 86.0,
    Carbohydrate: 19.0,
    Sugar: 6.7,
    Total_Fat: 19.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Hide & Seek Bourbon",
    Energy: 512.0,
    Proteins: 51.1,
    Carbohydrate: 33.9,
    Sugar: 5.6,
    Total_Fat: 24.4,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Hide & Seek Fab",
    Energy: 515.0,
    Proteins: 50.0,
    Carbohydrate: 32.2,
    Sugar: 5.5,
    Total_Fat: 23.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Parle Actifit Digestive Marie",
    Energy: 350.0,
    Proteins: 55.4,
    Carbohydrate: 28.5,
    Sugar: 5.2,
    Total_Fat: 18.6,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Magix",
    Energy: 470.0,
    Proteins: 75.0,
    Carbohydrate: 33.0,
    Sugar: 5.8,
    Total_Fat: 16.3,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Parle Marie",
    Energy: 489.0,
    Proteins: 70.7,
    Carbohydrate: 14.8,
    Sugar: 6.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Coconut Cookies",
    Energy: 469.0,
    Proteins: 74.6,
    Carbohydrate: 25.9,
    Sugar: 6.5,
    Total_Fat: 16.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Milk Shakti",
    Energy: 490.0,
    Proteins: 73.3,
    Carbohydrate: 24.5,
    Sugar: 6.3,
    Total_Fat: 20.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Oreo",
    Energy: 483.0,
    Proteins: 71.9,
    Carbohydrate: 38.8,
    Sugar: 5.2,
    Total_Fat: 19.6,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Dark Fantasy",
    Energy: 504.0,
    Proteins: 63.9,
    Carbohydrate: 37.6,
    Sugar: 5.7,
    Total_Fat: 25.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Yummy",
    Energy: 512.0,
    Proteins: 51.1,
    Carbohydrate: 33.9,
    Sugar: 5.6,
    Total_Fat: 24.4,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Pure Magic",
    Energy: 490.0,
    Proteins: 73.3,
    Carbohydrate: 24.5,
    Sugar: 6.3,
    Total_Fat: 20.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Treat",
    Energy: 483.0,
    Proteins: 73.0,
    Carbohydrate: 33.5,
    Sugar: 5.0,
    Total_Fat: 19.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Britannia Cookies",
    Energy: 443.0,
    Proteins: 70.2,
    Carbohydrate: 14.2,
    Sugar: 6.2,
    Total_Fat: 19.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Milk Bikis",
    Energy: 490.0,
    Proteins: 73.3,
    Carbohydrate: 24.1,
    Sugar: 6.5,
    Total_Fat: 20.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Tiger",
    Energy: 515.0,
    Proteins: 50.0,
    Carbohydrate: 32.2,
    Sugar: 5.5,
    Total_Fat: 23.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Nutri Choice",
    Energy: 489.0,
    Proteins: 70.7,
    Carbohydrate: 14.8,
    Sugar: 6.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Good Day",
    Energy: 490.0,
    Proteins: 73.3,
    Carbohydrate: 24.1,
    Sugar: 6.5,
    Total_Fat: 20.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Time Pass",
    Energy: 453.0,
    Proteins: 78.2,
    Carbohydrate: 25.5,
    Sugar: 6.2,
    Total_Fat: 12.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Bourbon",
    Energy: 515.0,
    Proteins: 50.0,
    Carbohydrate: 32.2,
    Sugar: 5.5,
    Total_Fat: 23.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Little Hearts",
    Energy: 488.0,
    Proteins: 70.0,
    Carbohydrate: 24.5,
    Sugar: 6.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "50-50",
    Energy: 489.0,
    Proteins: 70.5,
    Carbohydrate: 19.6,
    Sugar: 6.8,
    Total_Fat: 19.9,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Nice Time",
    Energy: 451.0,
    Proteins: 78.2,
    Carbohydrate: 25.5,
    Sugar: 6.5,
    Total_Fat: 12.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Marie Gold",
    Energy: 489.0,
    Proteins: 70.7,
    Carbohydrate: 14.8,
    Sugar: 6.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Rusks",
    Energy: 451.0,
    Proteins: 78.2,
    Carbohydrate: 25.5,
    Sugar: 6.5,
    Total_Fat: 12.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Italiano Cookies",
    Energy: 455.0,
    Proteins: 78.9,
    Carbohydrate: 24.4,
    Sugar: 5.6,
    Total_Fat: 12.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Glucose V",
    Energy: 489.0,
    Proteins: 70.5,
    Carbohydrate: 19.6,
    Sugar: 6.8,
    Total_Fat: 19.9,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Jeera Top",
    Energy: 475.66,
    Proteins: 8.83,
    Carbohydrate: 67.58,
    Sugar: 10.76,
    Total_Fat: 18.88,
    Saturated_Fat: 9.56,
    Trans_Fat: 0.0,
    Sodium: 0.129,
  },
  {
    Product_Name: "Butter Bite",
    Energy: 489.87,
    Proteins: 7.52,
    Carbohydrate: 64.75,
    Sugar: 17.7,
    Total_Fat: 22.31,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.31,
  },
  {
    Product_Name: "Cheez Bit",
    Energy: 150.0,
    Proteins: 4.0,
    Carbohydrate: 19.0,
    Sugar: 8.0,
    Total_Fat: 6.0,
    Saturated_Fat: 3.0,
    Trans_Fat: 0.0,
    Sodium: 0.21,
  },
  {
    Product_Name: "Cheese Cracker",
    Energy: 503.0,
    Proteins: 6.9,
    Carbohydrate: 62.5,
    Sugar: 13.8,
    Total_Fat: 25.0,
    Saturated_Fat: 14.8,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "CNC",
    Energy: 506.0,
    Proteins: 3.0,
    Carbohydrate: 21.0,
    Sugar: 5.0,
    Total_Fat: 7.0,
    Saturated_Fat: 4.0,
    Trans_Fat: 0.0,
    Sodium: 0.125,
  },
  {
    Product_Name: "Marie Lite",
    Energy: 480.0,
    Proteins: 3.5,
    Carbohydrate: 20.0,
    Sugar: 4.0,
    Total_Fat: 6.0,
    Saturated_Fat: 3.5,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Snacks Zig Zag",
    Energy: 455.0,
    Proteins: 5.0,
    Carbohydrate: 23.0,
    Sugar: 5.0,
    Total_Fat: 7.0,
    Saturated_Fat: 4.0,
    Trans_Fat: 0.0,
    Sodium: 0.125,
  },
  {
    Product_Name: "Coconut Crunch",
    Energy: 452.0,
    Proteins: 7.42,
    Carbohydrate: 76.1,
    Sugar: 18.24,
    Total_Fat: 13.07,
    Saturated_Fat: 4.34,
    Trans_Fat: 0.0,
    Sodium: 0.42,
  },
  {
    Product_Name: "Kids Cream",
    Energy: 500.0,
    Proteins: 6.1,
    Carbohydrate: 62.3,
    Sugar: 6.5,
    Total_Fat: 22.31,
    Saturated_Fat: 4.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Classic Cream",
    Energy: 506.0,
    Proteins: 6.5,
    Carbohydrate: 65.0,
    Sugar: 21.2,
    Total_Fat: 22.4,
    Saturated_Fat: 10.8,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Lemon Mazaa",
    Energy: 507.14,
    Proteins: 6.88,
    Carbohydrate: 66.93,
    Sugar: 23.4,
    Total_Fat: 23.38,
    Saturated_Fat: 10.99,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Dil Khush",
    Energy: 501.0,
    Proteins: 4.2,
    Carbohydrate: 68.0,
    Sugar: 20.5,
    Total_Fat: 21.1,
    Saturated_Fat: 10.1,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Funfill Choco Vanilla",
    Energy: 505.4,
    Proteins: 6.5,
    Carbohydrate: 66.8,
    Sugar: 23.4,
    Total_Fat: 20.5,
    Saturated_Fat: 9.8,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Dream Lite",
    Energy: 505.5,
    Proteins: 5.9,
    Carbohydrate: 65.6,
    Sugar: 21.1,
    Total_Fat: 24.3,
    Saturated_Fat: 10.5,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Yummy - Milk Cream",
    Energy: 464.0,
    Proteins: 8.0,
    Carbohydrate: 73.0,
    Sugar: 21.7,
    Total_Fat: 15.5,
    Saturated_Fat: 8.4,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "E-Time",
    Energy: 510.0,
    Proteins: 7.4,
    Carbohydrate: 66.0,
    Sugar: 25.0,
    Total_Fat: 24.0,
    Saturated_Fat: 14.4,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Tip Top Kajoo Kurkure Masala",
    Energy: 558.0,
    Proteins: 63.1,
    Carbohydrate: 55.1,
    Sugar: 5.0,
    Total_Fat: 34.6,
    Saturated_Fat: 16.0,
    Trans_Fat: 0.1,
    Sodium: 0.892,
  },
  {
    Product_Name: "Funfill Orange",
    Energy: 479.0,
    Proteins: 6.2,
    Carbohydrate: 55.9,
    Sugar: 6.5,
    Total_Fat: 22.31,
    Saturated_Fat: 4.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Coconutty",
    Energy: 470.0,
    Proteins: 73.8,
    Carbohydrate: 25.0,
    Sugar: 6.1,
    Total_Fat: 16.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Funfill Rich Chocolate",
    Energy: 490.0,
    Proteins: 78.1,
    Carbohydrate: 24.5,
    Sugar: 6.1,
    Total_Fat: 13.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Thin Arrowroot",
    Energy: 150.0,
    Proteins: 4.1,
    Carbohydrate: 19.0,
    Sugar: 7.5,
    Total_Fat: 5.8,
    Saturated_Fat: 3.0,
    Trans_Fat: 0.0,
    Sodium: 0.21,
  },
  {
    Product_Name: "Golmol",
    Energy: 501.0,
    Proteins: 70.1,
    Carbohydrate: 19.2,
    Sugar: 6.7,
    Total_Fat: 19.8,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Marie",
    Energy: 488.0,
    Proteins: 70.7,
    Carbohydrate: 14.8,
    Sugar: 6.5,
    Total_Fat: 20.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Jadoo",
    Energy: 505.0,
    Proteins: 68.2,
    Carbohydrate: 18.0,
    Sugar: 5.0,
    Total_Fat: 18.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Veg Munch",
    Energy: 455.0,
    Proteins: 69.8,
    Carbohydrate: 18.2,
    Sugar: 5.8,
    Total_Fat: 18.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Marie Time",
    Energy: 508.0,
    Proteins: 70.2,
    Carbohydrate: 13.5,
    Sugar: 6.5,
    Total_Fat: 18.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "2 in 1",
    Energy: 470.0,
    Proteins: 6.4,
    Carbohydrate: 63.0,
    Sugar: 25.0,
    Total_Fat: 21.0,
    Saturated_Fat: 9.4,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Snackles",
    Energy: 475.0,
    Proteins: 68.8,
    Carbohydrate: 17.5,
    Sugar: 5.5,
    Total_Fat: 17.2,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Butter Bake",
    Energy: 494.0,
    Proteins: 7.0,
    Carbohydrate: 68.8,
    Sugar: 21.1,
    Total_Fat: 11.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 298.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Milk Made",
    Energy: 510.0,
    Proteins: 66.1,
    Carbohydrate: 20.2,
    Sugar: 5.8,
    Total_Fat: 18.3,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Cream Cracker",
    Energy: 507.0,
    Proteins: 71.0,
    Carbohydrate: 18.0,
    Sugar: 5.0,
    Total_Fat: 18.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Bakersville",
    Energy: 508.0,
    Proteins: 80.0,
    Carbohydrate: 18.1,
    Sugar: 6.1,
    Total_Fat: 19.1,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Anmol Biscuits",
    Energy: 501.0,
    Proteins: 70.0,
    Carbohydrate: 19.6,
    Sugar: 6.8,
    Total_Fat: 19.9,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Unibic",
    Energy: 470.0,
    Proteins: 6.4,
    Carbohydrate: 63.0,
    Sugar: 25.0,
    Total_Fat: 21.0,
    Saturated_Fat: 9.4,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Sprite",
    Energy: 54.0,
    Proteins: 0.0,
    Carbohydrate: 3.0,
    Sugar: 3.1,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.014,
  },
  {
    Product_Name: "Thums Up",
    Energy: 110.0,
    Proteins: 1.1,
    Carbohydrate: 27.0,
    Sugar: 27.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.035,
  },
  {
    Product_Name: "Mirinda",
    Energy: 49.0,
    Proteins: 0.0,
    Carbohydrate: 13.0,
    Sugar: 13.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.005,
  },
  {
    Product_Name: "Maaza",
    Energy: 56.0,
    Proteins: 0.0,
    Carbohydrate: 14.0,
    Sugar: 10.5,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Fanta",
    Energy: 52.0,
    Proteins: 0.0,
    Carbohydrate: 13.0,
    Sugar: 13.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Slice",
    Energy: 55.0,
    Proteins: 0.0,
    Carbohydrate: 15.0,
    Sugar: 11.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Pepsi",
    Energy: 150.0,
    Proteins: 0.0,
    Carbohydrate: 10.9,
    Sugar: 10.9,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.03,
  },
  {
    Product_Name: "Coca Cola",
    Energy: 70.0,
    Proteins: 0.0,
    Carbohydrate: 15.0,
    Sugar: 14.0,
    Total_Fat: 0.5,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.04,
  },
  {
    Product_Name: "Limca",
    Energy: 44.0,
    Proteins: 0.0,
    Carbohydrate: 11.0,
    Sugar: 11.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.026,
  },
  {
    Product_Name: "7Up",
    Energy: 42.0,
    Proteins: 0.0,
    Carbohydrate: 10.0,
    Sugar: 10.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.045,
  },
  {
    Product_Name: "Mountain Dew",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Frooti",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "appy FIZZ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Red Bull",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Sting ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Product_Name: "Haldiram's Navrattan",
    Energy: 649.7,
    Proteins: 19.2,
    Carbohydrate: 40.6,
    Sugar: 2.9,
    Total_Fat: 34.5,
    Saturated_Fat: 6.8,
    Trans_Fat: 0.1,
    Sodium: 0.09,
  },
  {
    Product_Name: "Haldiram's PACHARATTAN MIX",
    Energy: 553.0,
    Proteins: 0.0,
    Carbohydrate: 47.19,
    Sugar: 7.6,
    Total_Fat: 37.43,
    Saturated_Fat: 13.02,
    Trans_Fat: 0.0,
    Sodium: 0.085,
  },
  {
    Product_Name: "Haldiram's MATHRI",
    Energy: 568.0,
    Proteins: 4.0,
    Carbohydrate: 57.0,
    Sugar: 1.0,
    Total_Fat: 36.0,
    Saturated_Fat: 18.0,
    Trans_Fat: 0.5,
    Sodium: 0.084,
  },
  {
    Product_Name: "Haldiram's KAJU MIXTURE",
    Energy: 546.1,
    Proteins: 17.2,
    Carbohydrate: 42.0,
    Sugar: 3.4,
    Total_Fat: 34.2,
    Saturated_Fat: 8.9,
    Trans_Fat: 0.0,
    Sodium: 0.091,
  },
  {
    Product_Name: "Haldiram's KHATTA MITHA",
    Energy: 675.4,
    Proteins: 11.7,
    Carbohydrate: 30.7,
    Sugar: 0.0,
    Total_Fat: 56.2,
    Saturated_Fat: 24.42,
    Trans_Fat: 0.0,
    Sodium: 0.084,
  },
  {
    Product_Name: "Haldiram's ALL IN ONE",
    Energy: 670.0,
    Proteins: 12.1,
    Carbohydrate: 30.1,
    Sugar: 3.1,
    Total_Fat: 55.5,
    Saturated_Fat: 23.0,
    Trans_Fat: 0.0,
    Sodium: 0.088,
  },
  {
    Product_Name: "Haldiram's ALOO BHUJIA",
    Energy: 580.3,
    Proteins: 10.3,
    Carbohydrate: 41.4,
    Sugar: 3.0,
    Total_Fat: 41.5,
    Saturated_Fat: 12.0,
    Trans_Fat: 0.1,
    Sodium: 0.086,
  },
  {
    Product_Name: "Haldiram's TASTY NUTS",
    Energy: 586.28,
    Proteins: 19.3,
    Carbohydrate: 32.25,
    Sugar: 0.0,
    Total_Fat: 42.2,
    Saturated_Fat: 10.2,
    Trans_Fat: 0.0,
    Sodium: 0.076,
  },
  {
    Product_Name: "Haldiram's KAJU KATLI",
    Energy: 476.0,
    Proteins: 11.39,
    Carbohydrate: 63.2,
    Sugar: 42.5,
    Total_Fat: 19.5,
    Saturated_Fat: 3.48,
    Trans_Fat: 0.0,
    Sodium: 0.018,
  },
];

const data1 = [
  {
    Disease_Name: "Asthma",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.4,
  },
  {
    Disease_Name: "Osteoporosis",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.347,
  },
  {
    Disease_Name: "Meniere's disease",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.217,
  },
  {
    Disease_Name: "Diabetes",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 5.215,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.26,
  },
  {
    Disease_Name: "Stomach cancer",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.313,
  },
  {
    Disease_Name: "Attacks to the brain",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.208,
  },
  {
    Disease_Name: "hypertension",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.26,
  },
  {
    Disease_Name: "Heart failure",
    Energy: 0.0,
    Proteins: 10.08,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.26,
  },
  {
    Disease_Name: "Kidney stones",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.347,
  },
  {
    Disease_Name: "Weight gain ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 26.08,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "chronic inflammation",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 26.086,
    Sugar: 6.08,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "fatty-Liver",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 52.17,
    Sugar: 2.34,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "heart attack",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 17.39,
    Sugar: 4.173,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.55,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Acne",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 25.36,
    Sugar: 4.173,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: " cancer ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 4.173,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Dipression ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 7.561,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Increase Skin Aging",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 5.31,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Cellular Aging",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 4.75,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Cavities ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 4.34,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Gout",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 4.86,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Tooth decay",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 4.95,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Noninsulin-Dependent Diabetes",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 17.5,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "High Cholesterol",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 26.06,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 22.5,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "High Serum Insulin",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 20.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Fatigue  ",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 23.01,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Gall Bladder Stone",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 15.45,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Breast Cancer",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 22.5,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Corornary Heart Disease",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 13.34,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Type-2 Diabetes",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 5.215,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.55,
    Sodium: 0.0,
  },
  {
    Disease_Name: "Insomnia",
    Energy: 0.0,
    Proteins: 0.0,
    Carbohydrate: 0.0,
    Sugar: 0.0,
    Total_Fat: 0.0,
    Saturated_Fat: 0.0,
    Trans_Fat: 0.0,
    Sodium: 0.4,
  },
];
