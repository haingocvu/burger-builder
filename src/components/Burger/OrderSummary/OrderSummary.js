import React, { useContext } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import BurgerBuilderContext from '../../../context/BurgerBuilder/BurgerBuiderContext';

const OrderSummary = (props) => {

    const context = useContext(BurgerBuilderContext);

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
            <p>Price: {props.price}</p>
            <p>Continue to checkout?</p>
            <Button onClick={context.continueCheckoutHandler} btnType="Success">Continue</Button>
            <Button onClick={context.cancelCheckoutHandler} btnType="Danger">Cancel</Button>
        </Aux>
    )
}

export default OrderSummary;