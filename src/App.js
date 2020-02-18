import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from './reducers/store';

import FormOfOrder from './components/FormOfOrder';
import TableOutputList from './components/TableOutputList';
function App() {



  return (
    <Provider store={store}>
      <Fragment>
        <section className='wrap-section'>
          <FormOfOrder />
        </section>

        <section>
          <TableOutputList />
        </section>
      </Fragment>
    </Provider>
  );
}

export default App;
