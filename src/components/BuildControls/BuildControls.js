import React, { memo } from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import { INGREDIENTS } from '../../constants/constants';

const build = () => {
    return INGREDIENTS.map(c => <BuildControl type={c.type} key={c.label} label={c.label} />)
}

const BuildControls  = (props) => (
    <div className={classes.BuildControls}>
        <div>
            <strong>Total Prices: {'$' + props.prices.toFixed(2)}</strong>
        </div>
        {build()}
    </div>
);

export default memo(BuildControls);