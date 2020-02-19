import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './table.css';

import { getOrders } from '../../actions/action';

import TableOutputItem from './TableOutputItem';

let ordersHard=
[{"id":1,"members":1,"taken_pizza_count":"2,3,5,6","peace_count":2,"pizza_count":1,"created_at":null,"response_at":null},
{"id":2,"members":11,"taken_pizza_count":"2,3,5,6","peace_count":2,"pizza_count":1,"created_at":null,"response_at":null},
{"id":3,"members":1,"taken_pizza_count":"2,3,5,6","peace_count":2,"pizza_count":1,"created_at":null,"response_at":null}]


const TableOutputList =() =>{

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getOrders());
    }, [])

    const orders = useSelector((state)=> state.orders)
    console.log('ordersHard:', ordersHard)
    return (
        <table >
                <tbody>
                    <tr className="title-tr">
                        <th className="text-left">
                            <span>ID</span>
                        </th>
                        <th>
                            <span>Кол-во сотрудников</span>
                        </th>
                        <th>
                            <span>Кол-во выбраных кусочков</span>
                        </th>
                        <th>
                            <span> Кол-во доступных пицц</span>
                        </th>
                        <th>
                            <span>Кол-во выбраных пицц </span>
                        </th>
                        <th>
                            <span>Дата и время загрузки</span>
                        </th>
                        <th>
                            <span>Дата и время ответа от сервера</span>
                        </th>                        
                    </tr>
                    {ordersHard.map( (order) =>(
                        <TableOutputItem  order={order} key={`oreder+${order.id}`}/>
                    ))}
              
                </tbody>
            </table>
    )
}

export default TableOutputList;