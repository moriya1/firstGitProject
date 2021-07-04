import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
  product: {
    name: "tomato",
    id: 123456,
  }
}
const productFunc = {
  setProductName(state, action) {
    debugger
    state.product.name = action.payload;
  },
  setProductId(state, action) {
    debugger
    state.product.id = action.payload;
  },

};
export default produce((state, action) => createReducer(state, action, productFunc), initialState);
