/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import OrderSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {

    const { history, location } = props;

    const [ingredients, setIngredients] = useState({
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1
    })

    const [totalPrice, setTotalPrice] = useState(0);

    const [customer] = useState({
        name: 'max schwarzmuller',
        address: {
            street: 'Test Street 1',
            zipCode: '41351',
            country: 'Germany'
        },
        email: 'test@test.com'
    });

    const [deliveryMethod] = useState('fastest');

    useEffect(() => {
        const ingredients = {};
        let totalPrice = 0;
        const query = new URLSearchParams(location.search);
        for (let e of query.entries()) {
            if (e[0] !== 'totalPrice') {
                ingredients[e[0]] = e[1];
            } else {
                totalPrice = e[1]
            }
        }
        setIngredients(ingredients);
        setTotalPrice(totalPrice);
    }, [])

    const continueCheckoutHandler = () => {
        history.replace(props.match.url + '/contact-data');
    }

    const cancelCheckoutHandler = () => {
        history.goBack();
    }

    return (
        <div>
            <OrderSummary
                continueCheckout={continueCheckoutHandler}
                cancelCheckout={cancelCheckoutHandler}
                ingredients={ingredients} />
            <Route 
                path={props.match.url + '/contact-data'}
                render={() => <ContactData ingredients={ingredients} totalPrice={+totalPrice} />}
            />
        </div>
    )
}

export default React.memo(Checkout);