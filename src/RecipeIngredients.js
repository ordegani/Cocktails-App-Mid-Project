import React from 'react';
import './App.css';


//import SavedList from './SavedList'

const RecipeIngredients = ({ingredients}) => {
    return(
        <div className="recipeIngredients">
       
        <ul>
            {ingredients.map(ingredients =>(
               <li>{ingredients.text}</li> 
            ))}
        </ul>
   
        </div>
    );
};

export default RecipeIngredients;