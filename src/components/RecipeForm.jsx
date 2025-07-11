import { useState } from 'react';

const RecipeForm = ({ initialRecipe, onSubmit, isEditing }) => {
  const [formData, setFormData] = useState(initialRecipe || {
    title: '',
    ingredients: '',
    instructions: '',
    image: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={submitHandler} className="p-6 max-w-xl bg-white rounded shadow mx-auto">
      <h2 className="font-bold text-xl mb-4">
        {isEditing ? 'Edit Your Recipe' : 'Create New Recipe'}
      </h2>

      <div className="mb-4">
        <label className="mb-1 block">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleInput}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Image Link</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleInput}
          placeholder="https://example.com/pic.jpg"
          className="w-full rounded border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Add Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInput}
          className="w-full rounded border p-2 h-32"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Preparation Steps</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInput}
          className="w-full h-32 p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="py-2 px-4 w-full rounded text-white bg-blue-600 hover:bg-blue-700"
      >
        {isEditing ? 'Update Recipe' : 'Save Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;
