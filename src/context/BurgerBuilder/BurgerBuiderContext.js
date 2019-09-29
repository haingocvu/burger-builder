import { createContext } from 'react';

const initValues = {
    addIngredientHandler: () => {},
    removeIngredientHandler: () => {},
    disabledInfo: {},
}

const BurgerBuilderContext = createContext(initValues);

export default BurgerBuilderContext;