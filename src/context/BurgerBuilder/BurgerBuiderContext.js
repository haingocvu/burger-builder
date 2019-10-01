import { createContext } from 'react';

const initValues = {
    addIngredientHandler: () => {},
    removeIngredientHandler: () => {},
    purchasingHandler: () => {},
    disabledInfo: {},
    purchasable: false
}

const BurgerBuilderContext = createContext(initValues);

export default BurgerBuilderContext;