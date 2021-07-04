// export function setFirstName(firstName) {
//     return { type: "SET_FIRST_NAME", payload: firstName };
// }
// export function setLastName(lastName) {
//     return { type: "SET_LAST_NAME", payload: lastName };
// }
// export function setTel(tel) {
//     return { type: "SET_TEL", payload: tel };
// }
// export function addBook(book) {
//     return { type: "ADD_BOOK", payload: book };
// }
// export function deleteBook(indexBook) {
//     return { type: "DELETE_BOOK", payload: indexBook };
// }
function convertActionNameToType(actionName) {
    // prop=setFirstName
    // actionName.replace(/([A-Z])/g, "_$1")= set_First_Name
    // set_First_Name.toUpperCase()=SET_FIRST_NAME
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions = new Proxy(
    {},//target
    {
        get: function (target, prop) {
            debugger
            // prop=setFirstName
            if (target[prop] === undefined)
                return function (args) {
                    // args=Saraf
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };

                };

            else return target[prop];
        }
    }
);
// debugger;
// actions
// export const actions 

