import React from 'react';
import classes from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = (props) => {

    const { ingredients, price } = props;

    const transformedIngredients = []

    for(let iName in ingredients) {
        transformedIngredients.push({
            name: iName,
            amount: ingredients[iName]
        })
    }

    const ingredientsOutput = transformedIngredients.map(ig => {
        return (
            <span
                key={ig.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}
            >
                {ig.name}: ({ig.amount})
            </span>
        )
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput} </p>
            <p>
                Price:
                <strong>
                    USD {price.toFixed(2)}
                </strong>
            </p>
        </div>
    )
}

Order.propTypes = {
    Ingredients: PropTypes.array,
    price: PropTypes.number,
}

export default Order;