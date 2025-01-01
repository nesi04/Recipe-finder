import React, { useState } from 'react';
import { getRecipeByName, getRecipeDetailsById } from '../API/spoonacular';

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Fetch recipes by name
            const basicResults = await getRecipeByName(search);

            // Fetch detailed information for each recipe
            const detailedResults = await Promise.all(
                basicResults.map((recipe) => getRecipeDetailsById(recipe.id))
            );

            setRecipes(detailedResults);
            setLoading(false);
        } catch (error) {
            setError('Error fetching recipes');
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center text-gray-700 mt-10">Loading...</div>;
    }
    if (error) {
        return <div className="text-center text-red-500 mt-10">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Search Recipes</h1>
            <form onSubmit={handleSearch} className="flex justify-center mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    className="w-1/2 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter recipe name"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </form>
            <div>
                {recipes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="border rounded-lg p-4 shadow-md">
                                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                {recipe.sourceUrl ? (
                                    <a
                                        href={recipe.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Recipe
                                    </a>
                                ) : (
                                    <p className="text-gray-500">Recipe link not available</p>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
