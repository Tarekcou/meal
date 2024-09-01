import "./App.css";
import axios from "axios";
import "./index.css";

import { useEffect, useState } from "react";

function App() {
  interface Meal {
    strMeal: string;
    strMealThumb: string;
    // strInstructions: string;
  }
  const [meals, setMeals] = useState<Meal[]>([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
        console.log(meals[0]);

        meals.map((m) => console.log(m.strMeal));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {" "}
      <h1 className="p-10 text-5xl text-center text-red-600">Meals</h1>
      <div className="place-items-center gap-4 grid grid-cols-4">
        {meals.map((m) => (
          <div className="bg-base-100 shadow-xl w-64 h-[400px] card hover:scale-105">
            <figure className="px-10 pt-10 w-full">
              <img
                src={m.strMealThumb}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="items-center text-center card-body">
              <h2 className="card-title">{m.strMeal}</h2>
              <p>{m.strMeal}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
