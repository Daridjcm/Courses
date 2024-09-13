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
      <h1 className="text-2xl font-bold">Recetas</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2 className="bg-green-300">{recipe.name.toUpperCase()}</h2>
          <ul className="text-red-300">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}><span className="text-zinc-950">•</span> {ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
