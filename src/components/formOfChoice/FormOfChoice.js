import React, { Fragment, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import { addOrder } from '../../actions/action';
import Loader from '../../common/Loader';

import './form-order.css';

const FormOfChoice = ({ addOrder }) => {

    const [status, setStatus] = useState('not-selected');

    const [file, setFile] = useState(null);
    const statusState = useSelector(state => state.updateReducer.status);

    useEffect(() => {
        if (statusState && statusState.length) {
            setStatus(statusState)
        }
    }, [statusState]);

    const handleFileUpload = (e) => {
        e.preventDefault()
        console.log(file)
        addOrder({
            file,
            name: 'name_file'
        });
        setStatus('request')
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
    };

    return (
        <Fragment>
            {status && status === 'request' ? <Loader /> : (
                <fieldset className='fieldset'>
                    <legend > Прикрепите ваш заказ: </legend>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile04"
                                onChange={(e) => handleInpute(e)} />
                            <label className="custom-file-label" htmlFor="inputGroupFile04" >
                                {file && file.name.length ? file.name : 'Выберите файл'}
                            </label>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"
                                onClick={(e) => handleFileUpload(e)}>Отправить</button>
                        </div>
                    </div>
                </fieldset>

                // <form>
                //     <fieldset className='fieldset'>
                //         <legend > Прикрепите ваш заказ: </legend>
                //         <label htmlFor="fileUpload" className="btn-lable">Select your order file</label>
                //         <input type='file' onChange={(e) => handleInpute(e)} className='button-choose-file' 
                //         id="fileUpload" style={{display: 'none'}} />
                //         <button onClick={(e) => handleFileUpload(e)} className='btn btn-primary '> Send </button>
                //     </fieldset>
                // </form>
            )}

        </Fragment>

    )
}

export default connect(null, { addOrder })(FormOfChoice);