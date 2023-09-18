import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='links'>
            <h4 className='footer-title'>
                Our Links
            </h4>
         <ul>
            <li>
                <Link to='/'  className='link-decoration'>Home</Link>
            </li>
            <li>
                <Link to='/service' className='link-decoration'>Services</Link>
            </li>
            <li>
                <Link to='/about' className='link-decoration'>About</Link>
            </li>
            <li>
                <Link to='/contact' className='link-decoration'>Contact Us</Link>
            </li>
         </ul>
        </div>

        <div className='our-services'>
        <h4 className='footer-title'>
                Our Services
            </h4>
         <ul>
            <li>
                <Link to='/' className='link-decoration'>Web Development</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>System Development</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Web Solution</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>App Design</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Web Design</Link>
            </li>
         </ul>
        </div>

        <div className='other-links'>
        <h4 className='footer-title'>
                Our Services
            </h4>
         <ul>
            <li>
                <Link to='/' className='link-decoration'>FAQ</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Portfolio</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Privacy Policy</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Terms & Conditions</Link>
            </li>
            <li>
                <Link to='/' className='link-decoration'>Support</Link>
            </li>
         </ul>
        </div>

        <div className='social'>
        <h4 className='footer-title'>
                Socials
            </h4>
      <ul>
        <li>
          <Link to='' className='link-decoration'>
            <FontAwesomeIcon icon={faTwitter} className='social-link'/> Twitter
          </Link>
        </li>
        <li>
          <Link to='' className='link-decoration'>
            <FontAwesomeIcon icon={faYoutube}  className='social-link'/> Youtube
          </Link>
        </li>
        <li>
          <Link to='' className='link-decoration'>
            <FontAwesomeIcon icon={faLinkedin}  className='social-link'/> LinkedIn
          </Link>
        </li>

        <li>
        <Link to='' className='link-decoration'>
            <FontAwesomeIcon icon={faFacebook}  className='social-link'/> Facebook
          </Link>
        </li>
      </ul>
    </div>
    </footer>

  )
}

export default Footer