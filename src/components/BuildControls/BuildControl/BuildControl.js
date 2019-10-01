import React, { useContext, memo } from 'react';
import classes from './BuildControl.module.scss';
import  BurgerBuilderContext from '../../../context/BurgerBuilder/BurgerBuiderContext';
import PropTypes from 'prop-types';

const BuildControl = (props) => {
    const context = useContext(BurgerBuilderContext);
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={() => context.removeIngredientHandler(props.type)}
                disabled={context.disabledInfo[props.type]}>
                Less
            </button>
            <button 
                className={classes.More} 
                onClick={() => context.addIngredientHandler(props.type)}>
                More
            </button>
        </div>
    )
}

BuildControl.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
}

export default memo(BuildControl);