import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { getOrders } from '../actions/action';

import TableOutputItem from './TableOutputItem';


const TableOutputList =() =>{

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getOrders());
    }, [])

    const orders = useSelector((state)=> state.orders)
    console.log('orders:', orders)
    return (
        <table className="trade-table">
                <tbody>
                    <tr className="title-tr">
                        <td className="text-left">
                            <span className="trade-td-title">ID</span>
                        </td>
                        <td>
                            <span className="trade-td-title">Кол-во сотрудников</span>
                        </td>
                        <td>
                            <span className="trade-td-title">Кол-во выбраных кусочков</span>
                        </td>
                        <td>
                            <span className="trade-td-title"> Кол-во доступных пицц</span>
                        </td>
                        <td>
                            <span className="trade-td-title">Кол-во выбраных пицц </span>
                        </td>
                        <td>
                            <span className="trade-td-title">Дата и время загрузки</span>
                        </td>
                        <td>
                            <span className="trade-td-title">Дата и время ответа от сервера</span>
                        </td>                        
                    </tr>
                   <TableOutputItem />
              
                </tbody>
            </table>
    )
}

export default TableOutputList;