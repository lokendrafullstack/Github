export default function ProductsReducer(state = [], action) {

    switch (action.type) {
        case "ProductsAction":
            return action.payload;
            break;
        default:
            return state;
    }
}
