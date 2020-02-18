import React from 'react';
import {connect} from 'react-redux'

import {addOrder} from '../actions/action'



const FormOfOrder = ({addOrder}) => {

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log(file)
        addOrder({
            file,
            name: 'name_file'
        })
    }
    return (
        <form>
            {/* <button onClick={handleFileUpload}> */}
            <input type='file' onChange={handleFileUpload} />
            {/* </button> */}
        </form>
    )
}

export default connect( null, {addOrder})(FormOfOrder) ;