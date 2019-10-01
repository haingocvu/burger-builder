import React, { memo, useContext } from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import { INGREDIENTS } from '../../constants/constants';
import BurgerBuilderContext from '../../context/BurgerBuilder/BurgerBuiderContext';

const build = () => {
    return INGREDIENTS.map(c => <BuildControl type={c.type} key={c.label} label={c.label} />)
}

const BuildControls  = (props) => {
    const contex = useContext(BurgerBuilderContext);
    return (
        <div className={classes.BuildControls}>
            <div>
                <strong>Total Prices: {'$' + props.prices.toFixed(2)}</strong>
            </div>
            {build()}
            <button onClick={contex.purchasingHandler} disabled={!contex.purchasable} className={classes.OrderButton}>Order Now</button>
        </div>
    )
};

export default memo(BuildControls);