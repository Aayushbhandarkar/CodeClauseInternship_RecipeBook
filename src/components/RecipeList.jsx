import DishCard from './RecipeCard';

const RecipeList = ({ recipes, onDelete }) => {
  const hasRecipes = recipes.length > 0;

  if (!hasRecipes) {
    return (
      <section style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{
          background: '#f1f5f9',
          maxWidth: '512px',
          marginInline: 'auto',
          padding: '2rem',
          borderRadius: '0.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#334155'
          }}>
            No recipes added yet
          </h3>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Let’s create your very first recipe!
          </p>
        </div>
      </section>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridGap: '1.5rem',
      padding: '0.5rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))'
    }}>
      {recipes.map((data) => (
        <DishCard key={data.id} dish={data} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default RecipeList;
