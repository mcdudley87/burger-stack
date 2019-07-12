import React from 'react';

class BurgerArea extends React.Component {
	render() {
		return (
			<>
			{this.props.usedIngredients.map((ingredient, i) => <h4 key={i} style={{backgroundColor: ingredient.color}}>{ingredient.name}</h4>)} 
			<button onClick={(e) => {this.props.onClearStack(e)}}>Clear</button>	

			</>
				)}
		}
	




export default BurgerArea;