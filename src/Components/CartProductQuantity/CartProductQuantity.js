import { PureComponent } from "react";
import "./CartProductQuantity.scss";

class CartProductQuantity extends PureComponent {

    constructor(props){
        super(props);

        this.handleQuantityIncrease= this.props.handleQuantityIncrease;
        this.handleQuantityDecrease= this.props.handleQuantityDecrease;

        this.minusIconSrc = this.props.size === "small" ? "/assets/img/minus-icon-small.svg" : "/assets/img/minus-icon.svg"
        this.plucIconSrc = this.props.size === "small" ? "/assets/img/plus-icon-small.svg" : "/assets/img/plus-icon.svg"
    }

    render(){
        return (
            <section className={`cart-product-quantity ${this.props.size}`}>
                
                <button 
                    className="cart-product-quantity__change-amount more"
                    onClick={this.handleQuantityIncrease}
                >
                    <img src={this.plucIconSrc} alt="add"/>
                </button>
                
                <div className="cart-product-quantity__quantity">{this.props.quantity}</div>

                <button 
                    className="cart-product-quantity__change-amount less"
                    onClick={this.handleQuantityDecrease}
                >
                    <img src={this.minusIconSrc} alt="minus"/>
                </button>
                
            </section>
        )
    }
}

export default CartProductQuantity;