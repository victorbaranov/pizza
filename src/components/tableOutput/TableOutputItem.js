import React, { Fragment } from 'react'

export default function TableOutputItem({order}) {
    // console.log('order:', order)
    return (
        <Fragment>
            <tr className="">
                <td>
                    <span>{order.id}</span>
                </td>
                <td>
                    <span>{order.members}</span>
                </td>
                <td>
                    {order.taken_pizza_count}
                    {/* <span>{order.taken_pizza_count}</span> */}
                </td>
                <td>
                    <span>{order.peace_count}</span>
                </td>
                <td>
                    <span>{order.pizza_count}</span>
                </td>
                <td>
                    <span>{order.created_at}</span>
                </td>
                <td>
                    <span>{order.response_at}</span>
                </td>
            </tr>
        </Fragment>
    )
}
