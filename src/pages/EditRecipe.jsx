
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import RecipeForm from '../components/RecipeForm';


const EditRecipe = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const [currentRecipe, setCurrentRecipe] = useState(null);


  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const targetRecipe = savedRecipes.find(item => item.id === Number(id));
       if (targetRecipe) {

      setCurrentRecipe(targetRecipe);

    }
  }, [id]);



     const updateRecipe = (formData) => {
     const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
     const modifiedRecipes = storedRecipes.map(item =>
      item.id === Number(id) ? { ...formData, id: Number(id) } : item
    );

    localStorage.setItem('recipes', JSON.stringify(modifiedRecipes));
    redirect('/');
  };

  if (!currentRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <RecipeForm
        initialRecipe={currentRecipe}
        onSubmit={updateRecipe}
        isEditing={true}
      />
    </section>
  );
};

export default EditRecipe;
