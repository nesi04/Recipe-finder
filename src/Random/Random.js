import React from 'react';
import useRecipes from '../Hooks/useRecipes';

const Random = () => {
  const {recipes , loading ,error}=useRecipes(5);
  
  if(loading){
    return <p className="text-center text-gray-500">Loading...</p>
  };
  if(error){ 
    return <p className="text-center text-red-500">Error: {error}</p>
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Some random recipes</h2>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700"
          onClick={()=>window.location.reload()}
        >
          Shuffle
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.map((recipe)=>(
                <div key={recipe.id} className="recipeCard p-4 border rounded shadow-md">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded"/>
                    <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
                    <p className="text-gray-700 mt-2">{recipe.summary.replace(/<[^>]*>/g, '')}</p>
                    <a 
                      href={recipe.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      View Recipe
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Random;