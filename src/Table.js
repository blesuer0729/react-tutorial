import React, { Component } from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((character, index) => {
        return (
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.job}</td>
            </tr>
        );
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

class Table extends Component {
    render() {
        const {characterData} = this.props;

        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody characterData={characterData}></TableBody>
            </table>
        );
    }
}

export default Table;