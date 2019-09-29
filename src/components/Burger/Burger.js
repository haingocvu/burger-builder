import React from 'react';
import classes from './Burger.module.scss';
import BurgerIncredient from './BurgerIngredient/BurgerIncredient';

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIncredient type="bread-top" />
            <BurgerIncredient type="cheese" />
            <BurgerIncredient type="meat" />
            <BurgerIncredient type="bread-bottom" />
        </div>
    )
}

export default Burger;