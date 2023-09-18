
import React, { Component } from 'react'
import '../App.css'
import './HeroSection.css'


export class HeroSection extends Component {
  render() {
    return (
      <div className='hero-container'>
        <img  src="/assets/hero-image.avif" alt='hero' className='hero--image' />
        <div className='hero-content'>
           <h1 className='hero--title'>We Design Interfaces That Users Love</h1>
           <span className='hero--p'>
           Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
           </span>
        </div>
      </div>
    )
  }
}

export default HeroSection