import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import { PRICING } from '../../constants/constants';
import BurgerBuilderContext from '../../context/BurgerBuilder/BurgerBuiderContext';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import http from '../../services/http';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasing: false,
        isloading: false,
        isUnmounted: false
    }

    componentDidMount() {
        http.get('/ingredients.json')
            .then(({ data }) => {
                if (!this.state.isUnmounted) {
                    this.setState({
                        ingredients: {
                            ...data
                        }
                    })
                }
            })
            .catch(err => {
                
            })
    }

    componentWillUnmount() {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.isUnmounted = true;
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
        this.setState({
            isloading: true
        })
        const orders = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            delivery: 'fastest',
            customer: {
                name: 'Tuyen Tran',
                address: {
                    provice: 'Dong Nai',
                    district: 'Xuan Phu'
                }
            }
        }

        http.post('/orders.json', orders)
            .then(res => this.setState({
                isloading: false,
                purchasing: false
            }))
            .catch(err => console.log(err))
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        const purchasable = this.checkPurchasable()
        for (let igkey in disabledInfo)
            disabledInfo[igkey] = disabledInfo[igkey] <= 0;

        let orderSummary = null;

        let burger = <Spinner />;
        if (this.state.ingredients) {
            orderSummary = <OrderSummary price={this.state.totalPrice.toFixed(2)} ingredients={this.state.ingredients} />;
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerBuilderContext.Provider
                        value={{
                            addIngredientHandler: this.addIngredientHandler,
                            removeIngredientHandler: this.removeIngredientHandler,
                            purchasingHandler: this.purchasingHandler,
                            disabledInfo,
                            purchasable
                        }}>
                        <BuildControls prices={this.state.totalPrice} />
                    </BurgerBuilderContext.Provider>
                </Aux>
            )
        }

        if (this.state.isloading) {
            orderSummary = <Spinner />
        };

        return (
            <Aux>
                <Modal onDestroyModal={this.cancelPurchasing} show={this.state.purchasing}>
                    <BurgerBuilderContext.Provider
                        value={{
                            continueCheckoutHandler: this.continueCheckoutHandler,
                            cancelCheckoutHandler: this.cancelPurchasing
                        }}>
                        {orderSummary}
                    </BurgerBuilderContext.Provider>
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, http);