import React, { Fragment } from 'react';
import './loader.css';

const Loader = () => {
    return (
        <Fragment>
            <div className='wrapp-loader'>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </Fragment>
    )
}

export default Loader;