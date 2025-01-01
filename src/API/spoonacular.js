import axios from 'axios';

const API_KEY ='8a9c78219fcf4eafb42f3238bceeaf0d';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const getRandomRecipes=(number=5)=>{
  return axios.get(`${BASE_URL}/random?number=${number}&apiKey=${API_KEY}`);
  
};

export const getRecipeByName = async (name) => {
  const response = await axios.get(
      `${BASE_URL}/complexSearch?query=${name}&apiKey=${API_KEY}`
  );
  return response.data.results; 
};
export const getRecipeDetailsById = async (id) => {
  const response = await axios.get(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
  );
  return response.data; // Returns detailed information including sourceUrl
};



  
