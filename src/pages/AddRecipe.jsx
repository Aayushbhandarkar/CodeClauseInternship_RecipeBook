import { useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

const AddRecipe = () => {
  const redirect = useNavigate();

  const saveRecipe = (data) => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeEntry = { ...data, id: Date.now() };
    localStorage.setItem('recipes', JSON.stringify([...storedRecipes, recipeEntry]));
    redirect('/');
  };

  return (
    <section className="py-8 px-4 container mx-auto">
      <RecipeForm onSubmit={saveRecipe} />
    </section>
  );
};

export default AddRecipe;
