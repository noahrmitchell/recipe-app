import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


function App() {
  const [recipes, setRecipes] = useState([]); 

  useEffect( () =>  {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button">Submit</button>
      </form>
      {recipes.map(recipe => (
      <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/> 
      ))}
    </div>
  );
}
export default App;
