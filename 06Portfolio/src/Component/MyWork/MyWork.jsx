// import React from 'react';
import './MyWork.css';

import myWork_data from '../../assets/mywork_data';
import arrow_icons from '../../assets/arrow_icons.png';
const MyWork = () => {
  return (

      <div id='mywork' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
          
        </div>
        <div className='mywork-container'>
        {myWork_data.map((work, index) => {
            return <img key={index} src={work.w_image} alt=''/>
        })}
      </div>
      <div className='mywork-showmore'>
        <p>Show More....</p>
        <img src={arrow_icons} alt=''/>
        
      </div>
</div>

  )
}

export default MyWork
