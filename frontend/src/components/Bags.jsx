import React from 'react';

const Bags = ({ numberOfBags, changeBags }) => {
    return (
        <div className="bags" >
            <span className="bags__selector" onClick={() => changeBags('subtraction')}>-</span>
            <span className="bags__number">{numberOfBags}</span>
            <span className="bags__selector" onClick={() => changeBags('add')}> +</span>
        </div >
    )
}


export default Bags