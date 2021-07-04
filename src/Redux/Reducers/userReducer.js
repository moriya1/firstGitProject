import produce from 'immer'
import createReducer from "./ReducerUtils";


const initialState = {
  user: {
    firstName: "Sara",
    lastName: localStorage.lastName,
    tel: "05434567889",
    message: [],
  }
}
// export default produce((state, action) => {
//     switch (action.type) {
//         case "SET_FIRST_NAME":
//             state.user.firstName = action.payload;
//             break;
//         case "SET_LAST_NAME":
//             state.user.lastName = action.payload;
//             break;
//         case "SET_TEL":
//             state.user.tel = action.payload;
//             break;
//         default:
//             break;
//     }
// }, initialState)


const users = {
  setFirstName(state, action) {
    debugger
    state.user.firstName = action.payload;
  },
  setLastName(state, action) {
    debugger
    state.user.lastName = action.payload;
  },
  setTel(state, action) {
    state.user.tel = action.payload;
  },
  setUser(state, action) {
    state.user = action.payload;
  },
};
export default produce((state, action) => createReducer(state, action, users), initialState);
