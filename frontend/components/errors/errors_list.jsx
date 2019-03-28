import React from 'react';

const ErrorsList = (props) => {
    if (props.errors.length > 0) {
        const errorLis = props.errors.map( (error, idx) =>
            (<li key={idx}>
                {error}
            </li>)
        );
        return(
            <div className={`${props.errorsClass}-container`}>
                <ul className={props.errorsClass}>
                    {errorLis}
                </ul>
            </div>
        );
    } else {
        return(
            <></>
        );
    }
};

export default ErrorsList;