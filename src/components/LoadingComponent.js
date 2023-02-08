import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => {

    return (
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    )
};
 
export default Example;