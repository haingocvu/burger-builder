import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';

const CheckoutSummary = (props) => {
    const { ingredients, continueCheckout, cancelCheckout } = props;
    
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={ingredients} />
            </div>          
            <Button onClick={cancelCheckout} btnType="Danger">Cancel</Button>
            <Button onClick={continueCheckout} btnType="Success">Continue</Button>
        </div>
    )
}

export default React.memo(CheckoutSummary);