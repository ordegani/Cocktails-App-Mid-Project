

import React from "react";
import "./App.css";
import Mine from "./App"

const Saved = ()=>{
    const deleteFromfavourites = (recipe) => {
        setFavourites(
          favourites.filter((favourite) => favourite.title !== recipe.title)
        );
        // console.log(recipe);
      };
}
return(

    <div className="totalRecipeIngredients">
    
    <div className="favourites">
      {favourites.map((favourite, index) => (
        <Recipe
          key={index}
          title={favourite.title}
          calories={favourite.calories}
          image={favourite.image}
          ingredients={favourite.ingredients}
          onClick={deleteFromfavourites}
          buttonText="DELETE"
        />
      ))}
    </div>
    {/* <button className="print">Print</button> */}
  </div>
)