import React, { Fragment } from 'react'

export default function TableOutputItem() {
    return (
        <Fragment>
            <tr className="">
                <td className="text-left" data-label="Symbol">
                    <span>1</span>
                </td>
                <td data-label="Qty">
                    <span>17</span>
                </td>
                <td data-label="Order price">
                    <span>17</span>
                </td>
                <td data-label="Filled">
                    <span>6</span>
                </td>
                <td data-label="Remaining">
                    <span>2</span>
                </td>
                <td data-label="Order value">
                    <span>20:02:20</span>
                </td>
                <td data-label="Fill price">
                    <span>20:02:20</span>
                </td>
            </tr>
        </Fragment>
    )
}
