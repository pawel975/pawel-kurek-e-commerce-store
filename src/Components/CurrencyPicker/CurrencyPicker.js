import { gql } from "@apollo/client";
import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import {BiChevronDown as CurrencyPickerDash} from 'react-icons/bi';
import "./CurrencyPicker.scss";

const currenciesArray = gql`
    {
        currencies {
            label,
            symbol
        }
    }
`

class CurrencyPicker extends Component {

    render() {
        return (
            <div className="currency-picker">

                <div className="show-currencies-container">

                    <label htmlFor="show-currencies">{this.props.currentCurrencySymbol}</label>
                    <button 
                        onClick={this.props.handleCurrenciesListOpen} 
                        className={`show-currencies ${this.props.isCurrenciesListOpen ? "dash-open" : ""} `}
                    >
                        <CurrencyPickerDash/>
                    </button>

                </div>
                {
                    this.props.isCurrenciesListOpen &&
                    <Query query={currenciesArray}>
                        {({loading, data}) => {
                
                            if (loading) return "Loading...";
                
                            const {currencies} = data;
                
                            const currencyList = currencies.map(currency => {
                                const {label, symbol} = currency;

                                return (
                                    
                                    <button
                                        key={label} 
                                        className="currency-option"
                                        onClick={this.props.handleCurrencyChange}
                                    >
                                        <span className="currency-symbol">{symbol}</span>
                                        <span className="currency-label">{label}</span>
                                    </button>
                                )
                            })
                
                            return (
                                <div 
                                    className={`currencies-options-container ${this.props.isCurrenciesListOpen ? "currencies-options-container-visible" : ""} `}
                                >
                                    {currencyList}
                                </div> 
                            )
                        }}
                    </Query>
                }

            </div>
        )
        
    }
}

export default CurrencyPicker;