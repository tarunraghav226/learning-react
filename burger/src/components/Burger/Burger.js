import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    const transformedIngredients = 
                    Object.keys(props.ingredients).map( igKey => {
                        return [...Array(props.ingredients[igKey])].map(
                            (_, index) => {
                                return <BurgerIngredients 
                                            key={igKey+index}
                                            type={igKey}/>
                            }
                        )
                    })

    return (
        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default burger;