import React from 'react'; 
import uuid from 'react-uuid'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>Calories: {calories}</p>
            <h3>Ingredients:</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li key={uuid()}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;