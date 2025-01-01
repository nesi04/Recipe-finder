import React from 'react';
import useRecipes from '../Hooks/useRecipes';

const Pick = () => {
  const {recipes , loading ,error}=useRecipes(20);
  
  if(loading){
    return <p>Loading...</p>

  };
  if(error){ return <p>Error:{error}</p>};

  return (
    <div>
        <h2 className='text-bold text-center text-5xl my-10'>Our top picks of the day</h2>
        <div>
            {recipes.map((recipe)=>{
                
                return (
                <div key={recipe.id} className='recipeCard py-6 gap-4 flex m-10 border border-blue-500 px-4 rounded-lg '>
                  <img src={recipe.image} alt={recipe.title} className='w-32 h-32 rounded-full'/>
                  <h3 className='font-bold'>{recipe.title}</h3>
                  <p>{recipe.summary.replace(/<[^>]*>/g, '')}</p>
                  <a className='text-blue-700' href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Recipe
                </a>
                </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Pick;