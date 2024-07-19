const recipes = [{
    id: 'greek-salad',
    name: 'Ensalada griega',
    ingredients: ['tomates', 'pepino', 'cebolla', 'aceitunas', 'queso feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Pizza hawaiana',
    ingredients: ['masa de pizza', 'salsa de pizza', 'mozzarella', 'jamón', 'piña']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['garbanzos', 'aceite de oliva', 'dientes de ajo', 'limón', 'tahini']
  }
];
  
export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
