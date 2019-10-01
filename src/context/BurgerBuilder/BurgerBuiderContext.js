import { createContext } from 'react';

const initValues = {
    addIngredientHandler: () => {},
    removeIngredientHandler: () => {},
    purchasingHandler: () => {},
    continueCheckoutHandler: () => {},
    cancelCheckoutHandler: () => {},
    disabledInfo: {},
    purchasable: false
}

const BurgerBuilderContext = createContext(initValues);

export default BurgerBuilderContext;