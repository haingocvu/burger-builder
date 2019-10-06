import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import { PRICING } from '../../constants/constants';
import BurgerBuilderContext from '../../context/BurgerBuilder/BurgerBuiderContext';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0 
        },
        totalPrice: 0,
        purchasing: false
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
        let newPrice = this.state.totalPrice;
        if (newIngredient[type] > 0) {
            newIngredient[type]--;
            newPrice -= PRICING[type];
        }
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        })
    }

    checkPurchasable = () => {
        let sum = 0;
        const { ingredients } = this.state;
        for (let key in ingredients) {
            sum += ingredients[key]
        }
        return sum > 0
    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    cancelPurchasing = () => {
        this.setState({
            purchasing: false
        })
    }

    continueCheckoutHandler = () => {
        alert('you continue')
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        const purchasable = this.checkPurchasable()
        for (let igkey in disabledInfo)
            disabledInfo[igkey] = disabledInfo[igkey] <= 0;
        return (
            <Aux>
                <Modal onDestroyModal={this.cancelPurchasing} show={this.state.purchasing}>
                    <BurgerBuilderContext.Provider 
                        value={{
                            continueCheckoutHandler: this.continueCheckoutHandler,
                            cancelCheckoutHandler: this.cancelPurchasing
                        }}>
                        <OrderSummary price={this.state.totalPrice.toFixed(2)} ingredients={this.state.ingredients} />
                    </BurgerBuilderContext.Provider>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerBuilderContext.Provider
                    value={{
                        addIngredientHandler: this.addIngredientHandler,
                        removeIngredientHandler: this.removeIngredientHandler,
                        purchasingHandler: this.purchasingHandler,
                        disabledInfo,
                        purchasable
                    }}>
                    <BuildControls prices={this.state.totalPrice}/> 
                </BurgerBuilderContext.Provider>
            </Aux>
        )
    }
}

export default BurgerBuilder;