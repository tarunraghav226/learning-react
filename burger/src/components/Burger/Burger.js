import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {

    let transformedIngredients = 
                    Object.keys(props.ingredients).map( igKey => {
                        return [...Array(props.ingredients[igKey])].map(
                            (_, index) => {
                                return <BurgerIngredients 
                                            key={igKey+index}
                                            type={igKey}/>
                            }
                        )
                    }).reduce((arr, el) => {
                        return arr.concat(el);
                    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add ingredients!!!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default burger;