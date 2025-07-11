import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="rounded-lg bg-white shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image || 'https://via.placeholder.com/400x300'}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{recipe.title}</h3>
        <div className="flex items-center justify-between">
          <Link
            to={`/edit/${recipe.id}`}
            className="hover:text-blue-800 text-blue-600"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(recipe.id)}
            className="hover:text-red-800 text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
