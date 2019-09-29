import React from 'react';
import classes from './Burger.module.scss';
import BurgerIncredient from './BurgerIngredient/BurgerIncredient';
import Proptypes from 'prop-types';

const Burger = (props) => {

    const showIngredients = () => {
        const { ingredients } = props;
        let ingredientsArr = Object.keys(ingredients).map(igKey => {
            return [...Array(ingredients[igKey])].map((_, i) =>
                <BurgerIncredient key={igKey + i} type={igKey} />
            )
        }).reduce((accu, curr) => [...accu, ...curr], []);
        ingredientsArr = ingredientsArr.length ? ingredientsArr :
            <p>Please start add ingredients</p>
        return ingredientsArr;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIncredient type="bread-top" />
            {showIngredients()}
            <BurgerIncredient type="bread-bottom" />
        </div>
    )
}

Burger.prototype = {
    ingredients: Proptypes.object
}

export default Burger;