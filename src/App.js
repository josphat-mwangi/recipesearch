import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';



const App =() =>{
  const APP_ID = "1c69cc85";
  const APP_KEY = "1218f77d807d03a91376280c0f0b5cbe";
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setquery] = useState("chicken")

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits)
    
  }
  
  const updateSearch = e => {

    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault() //prevent from page refresh
    setquery(search)
    setSearch('')
  }
  

  return(
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe =>(
        <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}

        />
        ))}
      </div>
    </div>
  );
}

export default App;

