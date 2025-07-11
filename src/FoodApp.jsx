import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2B0000] ">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;