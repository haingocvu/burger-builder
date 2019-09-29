import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import { PRICING } from '../../constants/constants';
import BurgerBuilderContext from '../../context/BurgerBuilder/BurgerBuiderContext';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0 
        },
        totalPrice: 0
    }
    addIngredientHandler = (type) => {
        // update state safety
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type]++;
        
        this.setState(((prevState, props) => {
            return {
                ...prevState,
                ingredients: newIngredient,
                totalPrice: prevState.totalPrice + PRICING[type]
            }
        }))
    }

    removeIngredientHandler = (type) => {
        // update state safety
        const newIngredient = { ...this.state.ingredients };
        let newPrice = this.totalPrice;
        if (newIngredient[type] > 0) {
            newIngredient[type]--;
            newPrice -= PRICING[type];
        }
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        })
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let igkey in disabledInfo)
            disabledInfo[igkey] = disabledInfo[igkey] <= 0;
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerBuilderContext.Provider
                    value={{
                        addIngredientHandler: this.addIngredientHandler,
                        removeIngredientHandler: this.removeIngredientHandler,
                        disabledInfo
                    }}>
                    <BuildControls /> 
                </BurgerBuilderContext.Provider>
            </Aux>
        )
    }
}

export default BurgerBuilder;