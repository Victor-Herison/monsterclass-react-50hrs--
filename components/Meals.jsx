import { useState, useEffect } from "react"
import axios from "axios"
const Meals = () => {
    const [meal, setMeal] = useState([])
    useEffect(() =>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then( (res) => {
            console.log(res.data.meals)
                setMeal(res.data.meals)
            }).catch(err => console.log(err))
    },[])
  return (
    <div className="meals-container">
        {meal.map((item) => (
          <div key={item.idMeal} className="meal-card">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <p>{item.strMeal}</p>
          </div>
        ))}
    </div>
  )
}

export default Meals
