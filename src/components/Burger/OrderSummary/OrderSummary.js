import React, {Component} from "react";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";


class OrderSummary extends Component {
    componentDidUpdate() {
        console.log("OrderSummary Update");
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>
            });

        return(
            <Auxilary>
            <h3>Order</h3>
            <p>Delicious Burger with ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>CheckOut?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Auxilary>
        )
    }
};

export default OrderSummary;