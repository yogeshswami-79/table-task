import React from 'react';
import pp from '../res/pp.svg'
import '../styles/name-style.css'

function Name({ info }) {
    return (
        <td className='name-container'>
            <img alt="pp" src={pp}/>
            <p>{info.name}</p>
        </td>
    )
}
export default Name;