import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


function App() {
  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState("");  
  const [query, setQuery] = useState("bananas");

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button">Submit</button>
        </form>
        <div className="recipe-wrapper">
        {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.url}
          title={recipe.recipe.label} 
          calories={Math.floor(recipe.recipe.calories)} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          /> 
        ))}
        </div>
    </div>
  );
}

export default App;
