import React from 'react';

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
            <p>Continue to Checkout?</p>
        </>
    );
};

export default orderSummary;