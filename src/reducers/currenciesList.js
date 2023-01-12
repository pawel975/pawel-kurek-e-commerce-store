import getFromLocalStorage from "../helpers/getFromLocalStorage";
import saveToLocalStorage from "../helpers/saveToLocalStorage";

let initState;

if (getFromLocalStorage("state") === undefined || getFromLocalStorage("state").isCurrenciesListOpen === undefined) {

    saveToLocalStorage("state", {
        ...getFromLocalStorage("state"),
        isCurrenciesListOpen: false
    })
    initState = [];

} else {
    initState = getFromLocalStorage("state").isCurrenciesListOpen;
}

const currenciesList = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_VISIBILITY":
            saveToLocalStorage("state", !state, "isCurrenciesListOpen")
            return !state;
        default:
            return state;
    }
}

export default currenciesList;