import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
// import './App.css';

import store from './reducers/store';

import FormOfChoice from './components/formOfChoice/FormOfChoice';
import TableOutputList from './components/tableOutput/TableOutputList';
function App() {



  return (
    <Provider store={store}>
      <Fragment>
        <div className='wrap-section'>
          <section className='output-section'>
            <FormOfChoice />
          </section>

          <section>
            <TableOutputList />
          </section>

        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
