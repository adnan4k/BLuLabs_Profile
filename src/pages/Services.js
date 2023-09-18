import React from 'react'
import './Services.css'
import CardList from '../components/CardList'

function Services() {
  return (
    <div className='service-container'>
      <h3 className='service--title'> 
        We Are Ready To Serve You. What Do You Want as To Do ?
      </h3>
       <CardList />
    </div>
  )
}

export default Services