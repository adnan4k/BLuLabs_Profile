import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope,faIndustry } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
        <h3 className='title'>Contact Us</h3>
        <h2 className='sub-title'>
            Want to discuss your product or partnership?
        </h2>

        <div className='contact-infos'>
           <Form />
           <div className="contact">
      <h2 className='contact-header'>Contact Information</h2>
      <div className="contact-info">

      <div className="contact-item">
      <i class="fas fa-industry"></i>
          <p className="info">BLU Labs PLC</p>
        </div>
        <div className="contact-item">
        <i class="fas fa-map-marker"></i>
          <p className="info">Bole sub city, 22 Festival 22 Bldg, #401</p>
        </div>
        <div className="contact-item">
        <i class="fas fa-phone"></i>
          <p className="info">+251 908 55 56 57</p>
        </div>
        <div className="contact-item">
        <i class="fas fa-envelope"></i>
          <p className="info">support@blulabs.net</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Contact