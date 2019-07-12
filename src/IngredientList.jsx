import React from 'react';

class IngredientList extends React.Component {
	render() {
		return (
			<>
			{this.props.ingredients.map((ingredient, i) => <h4 key={i}>{ingredient.name}<button onClick={(e) => {this.props.addIngredient(e, i)}}>Add</button></h4>)} 
				
			</>
				)}
		}
	






export default IngredientList;