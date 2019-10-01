import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
    const { ingredients } = props;
    const ingredientsSummary = Object.keys(ingredients).map((key, i) => (
        <li key={key + i}>
            <span style={{textTransform: 'capitalize'}}>{key}: </span>
            {ingredients[key]}
        </li>
    ))
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default OrderSummary;