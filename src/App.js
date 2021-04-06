import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import HelloPage from './HelloPage';
import NavBar from './NavBar';
import RecipeIngredients from './RecipeIngredients';
import Recipe from './Recipe';
//import SavedList from './components/SavedList';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>

        <Route  path='/HelloPage' component={HelloPage}/>
        <Route exact path='/Main' component={Main}/>
        <Route exact path='/saved' component={Recipe}/>


      </Switch>
      </BrowserRouter>
    </div>
  );
}



const Main = () => {
  //save my edamam ID and KEY as consts
  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";
/////////////////////////////
 
  // Declare a new state variable, which we'll call "count"

  

////////////////////////////
  //setState, it's an array of objects
  const [recipes, setRecipes] = useState([]);
  //setState search. default a empty string.
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('cocktail');
  const [favourites, setFavourites]=useState([]);

  //add to my existing list of favourites new recipe
const addTofavourites =(recipe)=>{
  setFavourites([...favourites, recipe]);
  //console.log(favourites);
}
const deleteFromfavourites =(recipe)=>{
  setFavourites(favourites.filter(favourite=>(favourite.title!==recipe.title)));
  // console.log(recipe);
}
  //useEffect, rendering time is when query is updated
  useEffect(() => {
    getRecipes();
},[query]);

  //insert the const APP_ID & const APP_KEY.
  //'q=' will draw my user's text input
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}+cocktail&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    if (search.includes("cocktail")){
      console.log(data.hits);};
  };

  //update search using user's input
  const updateSearch = e =>{
    setSearch(e.target.value);
  };
  
  //set query equal to search pervent rendering whenever a letter is typed
  //use e.preventDefault() to pervant default q='chicken' query
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  //form + map() recipes. 
  //create 'title', which 'meyatzeg'info from recipe.recipe.label. create 'calories', 'image', inggredients.
  //recipe => (return jsx) 
  return(
    <div className = "maincontainer">
      
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" placeholder="Type in your favorite fruit/spice" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="Submit">Search</button> 
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.image} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} onClick={addTofavourites} buttonText="Save"/>
      ))}
      </div> 
      
<div className="totalRecipeIngredients">
<label className="savedTitle">Saved</label>
<div className="favourites">
{favourites.map(favourite => (
<Recipe key={favourite.image} title={favourite.title} calories={favourite.calories} image={favourite.image} ingredients={favourite.ingredients} onClick={deleteFromfavourites} buttonText="DELETE"/>
))}
</div>
{/* <button className="print">Print</button> */}
</div>

    </div>
    
  );
};

//export default Main;


export default App;