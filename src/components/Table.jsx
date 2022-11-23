import React from 'react';
import '../styles/table-style.css'
import Name from './Name'
import THead from './THead';

function Table({ data, headings, map, sort }) {
    console.log(headings)
    return (
        <>
            <table id="table">
                <thead>
                    <tr>
                        {headings.map((head, i) => <THead key={i} title={map.get(head.title)} sortable={head.sortable} sort={sort} value={head.title} />)}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((obj, i) =>
                            <tr key={i}>
                                {
                                    headings.map((head, j) => (head.title === "person") ? (<Name info={obj[head.title]} key={j} />) : (<td key={j}>{obj[head.title]}</td>))
                                }
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    );
}

export default Table;