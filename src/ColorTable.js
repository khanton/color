import React, { Component } from 'react';
import './ColorTable.css';

export class ColorTable extends Component {
    render() {
        const rows = this.props.rows
        const cols = this.props.cols

        let table = []

        for (let i = 0; i < rows; i++) {
            let row = []
            for (let j = 0; j < cols; j++) {
                row.push(
                    <td key={(i * rows) + j}>
                        <div className="color"></div>
                    </td>
                )
            }
            table.push(<tr key={i}>{row}</tr>)
        }
        return (
            <table className="color-table">
                <tbody>
                    {table}
                </tbody>
            </table>
        )
    }
}