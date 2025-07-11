import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-gray-100 font-bold text-xl">Recipe Book by Ayush</h1>
        <Link
          to="/add"
          className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Add Recipe
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
