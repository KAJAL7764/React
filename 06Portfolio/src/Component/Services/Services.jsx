import React from 'react'
import './Services.css'
import services_Data from '../../assets/services_data';
import arrow_icons from '../../assets/arros_icons.png';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>MY Services</h1>
      </div>
      <div className='services-container'>
        {services_Data.map((service, index) => {
          return <div key={index} className='services-formate'>
          <h4>{service.s_id}</h4>
          <h3>{service.s_title}</h3>
          <h2>{service.s_desc}</h2>
          <h1>{service.s_details}</h1>
          <div className='services-readmore'>
            <p>Read More....</p>
            <img src={arrow_icons} alt=''/>
          </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services;
