import React from 'react'
import './About.css'
import Testimonial from '../components/Testimonial'

function About() {
  return (
    <React.Fragment>
    <div className='about-container'>
        <img src="/assets/about-banner.png" alt="about-image" />
        <div className='about--content'>
        <h1 className='title underline'>
            About Us
        </h1>
        <p className='about-text'>
            
        In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec
              volutpat metus
              lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus
              hendrerit ut a odio.
            
        </p>
        <p class="about-text">
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante,
              vehicula condimentum
              arcu.
            </p>
            
        </div>
       
    </div>
    <h3 className='service--title'>See What People Say About Us!</h3>
      <Testimonial />
    </React.Fragment>
  )
}

export default About