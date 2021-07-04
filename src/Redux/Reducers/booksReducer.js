import produce from 'immer'

const initialState = {
    arrayBooks: [{ name: "aaaaa", numPages: 67 }, { name: "bbbbbb", numPages: 56 }],
}
export default produce((state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            state.arrayBooks.push(action.payload);
            break;
        case "DELETE_BOOK":
            state.arrayBooks.splice(action.payload, 1);
            break;
        default:
            break;
    }
}, initialState)