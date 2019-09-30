import { createContext } from 'react';

const initValues = {
    addIngredientHandler: () => {},
    removeIngredientHandler: () => {},
    disabledInfo: {},
    purchasable: false
}

const BurgerBuilderContext = createContext(initValues);

export default BurgerBuilderContext;