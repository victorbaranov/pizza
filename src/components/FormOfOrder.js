import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { addOrder } from '../actions/action';

import './form-order.css';

const FormOfOrder = ({ addOrder }) => {

    const [file, setFile] = useState(null);

    const handleFileUpload = (e) => {
        e.preventDefault()
        console.log(file)
        addOrder({
            file,
            name: 'name_file'
        })
    };

    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file)
    //     addOrder({
    //         file,
    //         name: 'name_file'
    //     })
    // };

    const handleInpute = (e) => {
        const file = e.target.files[0];
        setFile(file)
    }
    return (
        <Fragment>
            <form>
                <fieldset className='fieldset'>
                    <legend > Прикрепите ваш заказ: </legend>
                    {/* <input type='file' onChange={handleFileUpload} className='button-choose-file' /> */}
                    <input type='file' onChange={(e) => handleInpute(e)} className='button-choose-file' />
                    <button onClick={(e) => handleFileUpload(e)} className='button-choose-file'> Send </button>
                </fieldset>
            </form>
        </Fragment>

    )
}

export default connect(null, { addOrder })(FormOfOrder);