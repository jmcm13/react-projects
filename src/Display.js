import React, { Component } from "react";

class Display extends Component {
  // recipeList = thispr
  render() {
    const { data } = this.props;
    console.log(data.recipe);
    return data.recipe.map((recipe) => {
      return (
        <div className="custom-div" key={recipe.idCategory}>
          <h3>{recipe.strCategory}</h3>
          <div className="img-holder">
            <img
              src={recipe.strCategoryThumb}
              alt={recipe.strCategoryThumb}
            ></img>
          </div>
          <p>{recipe.strCategoryDescription}</p>
        </div>
      );
    });
  }
}

export default Display;
