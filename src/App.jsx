import React, { Fragment } from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./reducers/store";

import FormOfOrder from "./components/FormOfOrder/FormOfOrder";

import TableOutputList from "./components/Table/TableOutputList";
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className='wrap-section'>
         
            <FormOfChoice />
          

          <section className='wrap-table'>
            <TableOutputList />
          </section>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;