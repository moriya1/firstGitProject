
import React from "react";
import { connect } from "react-redux";
function mapStateToProps(state) {
    return {
        listBooks: state.booksReducer.arrayBooks,
    };
}


export default connect(mapStateToProps)(function showBooks(props) {

    return (
        <>
            {
                props.listBooks &&
                props.listBooks.map((item, index) => (
                    <>
                        <p>numberr book {index}</p>
                        <span>{JSON.stringify(item)}</span>
                    </>
                ))}

        </>
    );
}
)




