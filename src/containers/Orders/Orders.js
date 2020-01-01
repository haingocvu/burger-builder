import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux/Aux';
import http from '../../services/http';
import Order from '../../components/Order/Order';
import withErrorHanler from '../../hoc/withErrorHandler/WithErrorHandler';

const Orders = (props) => {

    const [state, setState] = useState({
        orders: [],
        loading: true,
    })

    useEffect(() => {
        http.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key,
                    })
                }
                setState({
                    orders: fetchedOrders,
                    loading: false,
                })
            })
            .catch(() => {
                setState({
                    loading: false,
                })
            })
    }, [])

    return (
        <Aux>
            <div>Your Order</div>
            {state.orders.map((o, i) => (
                <Order ingredients={o.ingredients} price={o.totalPrice} key={i} />
            ))}
        </Aux>
    );
}

export default withErrorHanler(Orders, http);