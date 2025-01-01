import { useEffect, useState } from "react";
import { getRandomRecipes } from "../API/spoonacular";
const useRecipes = (number) => {
  const [recipes, setRecipes] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    setLoading(true);
    getRandomRecipes(number)
     .then((response)=>{
        setRecipes(response.data.recipes);
        setLoading(false);
     })
     .catch((error)=>{
        setError(error);
        setLoading(false);
     });
  },[number]);

  return{recipes,loading,error};
};
export default useRecipes;
