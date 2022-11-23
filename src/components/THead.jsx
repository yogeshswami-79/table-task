import React, { useState } from 'react';
import sortBtn from '../res/sort.svg'
import '../styles/thead-style.css'
function THead({ title, sort, value, sortable }) {
    const [ordr, setOrdr] = useState(true);

    function handleOnClick() {
        sort(value, ordr)
        setOrdr(ordr => !ordr)
    }
    return (
        <th>
            <div>
                <p>{title}</p>
                {sortable && <img alt="btn" src={sortBtn} onClick={handleOnClick} />}
            </div>
        </th>
    );
}

export default THead;