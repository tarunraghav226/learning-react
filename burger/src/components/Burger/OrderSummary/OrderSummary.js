import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients;
    const summaryList = Object.keys(props.ingredients)
                            .map(igKey => {
                                return <li key={igKey}>
                                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{ingredientSummary[igKey]}
                                        </li>
                            });
    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with :</p>
            <ul>
                {summaryList}
            </ul>
            <p>Total Price <strong>{props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" onClick={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" onClick={props.purchaseContinue}>Buy Now</Button>
        </>
    );
};

export default orderSummary;