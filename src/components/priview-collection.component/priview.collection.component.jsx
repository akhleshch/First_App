import React from 'react';
import './priview-collection.style.scss';

const PriviewCollection = ({title,item}) => {

    <div className ='collection-priview' >
    <h1 className ='title' >{title.toUpperCase()} </h1>

    <div className ='preview'>
    {item.map(item =>(
        <div key={item.id} >{item.name}     

        </div>
    ))}

    </div>

    </div>
}
export default PriviewCollection();
