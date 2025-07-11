import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipeList(data);
  }, []);

  const removeRecipe = (id) => {
    const filtered = recipeList.filter(item => item.id !== id);
    setRecipeList(filtered);
    localStorage.setItem('recipes', JSON.stringify(filtered));
  };

  return (
    <main>
      <h1 className="mb-8 text-3xl font-bold text-yellow-300">My Recipes</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipeList.map(item => (
          <RecipeCard 
            key={item.id} 
            recipe={item} 
            onDelete={removeRecipe} 
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
