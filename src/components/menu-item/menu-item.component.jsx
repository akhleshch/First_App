import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) =>{

  console.log("test",`${match.url}${linkUrl}`);
  console.log("test",match);

return (


  // eslint-disable-next-line no-sequences
    <div  className = {`${size} menu-item`} onClick={() =>history.push(`${match.url}${linkUrl}`)} >
      <div className ='backfround-image' style ={{
          backgroundImage : `url(${imageUrl})`
      }} > </div> 

    <div className = 'content'>
    <h1 className = 'title'  >{title.toUpperCase()}</h1>
    <span className = 'subtitle' >SHOP NOW</span>
    </div>
    </div> 
);
}
export default withRouter(MenuItem);