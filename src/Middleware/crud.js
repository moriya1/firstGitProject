import { actions } from "../Redux/action";




export const changeFirstName = ({ dispatch, getState }) => next => action => {
    debugger;
    if (action.type === 'SET_FIRST_NAME_WITH_DOLAR') {
        console.log(getState().userReducer.user.firstName);
        let newFirstName = "$" + action.payload;
        dispatch(actions.setFirstName(newFirstName))
    }
    return next(action)
}
export const changeLastName = ({ dispatch, getState }) => next => action => {
    debugger;
    if (action.type === 'SET_LAST_NAME_LOCAL_STORAGE') {
        if (action.payload)
            localStorage.lastName = action.payload
        dispatch(actions.setLastName(localStorage.lastName))
    }
    return next(action)
}
export const getAllQuoteFromServer = ({ dispatch, getState }) => next => action => {
    debugger;

    if (action.type === 'GETALL_QUOTE') {
        // userId = getState().managerComponent.managerComponent.userId

        // return fetch(configData.SERVER_URL + userName + '/getAllQuote', {
        //     method: 'GET',
        //     headers: {
        //         Authorization: TokenToString,
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then((res) => res.json()).then((resJson) => {
        //     checkPermission(resJson).then((ifOk) => {
        //         dispatch(actions.setUser(resJson))
        //     })
        //     console.log(resJson);

        //     dispatch({ type: "SET_LASTQUOTE", payload: resJson });

        // }).catch((err) => {
        //     console.log(err)
        // })

    }
    return next(action);
}
