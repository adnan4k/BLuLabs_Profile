import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import HeroSection from '../components/HeroSection';
import './Home.css';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className='development-grid'>
        <div className='dev-content'>
          <h4 className='dev-heading'>Our Development Life Cycle</h4>
          <p className='main-content'>
            BluLabs provides full-cycle software development services. From designing and developing an MVC to ensuring the execution of your project with thorough manual and automated software testing. We have over 12+ developers, software testers, QA engineers, business analysts, and DevOps specialists—each dedicated to ensuring that your business benefits from the software we develop.
          </p>
          <div className='dev-icons'>
  <div className='icon'>
    <i className="fas fa-calendar"></i>
    <span>Plan</span>
  </div>
  <div className='icon'>
    <i className="fas fa-wrench"></i>
    <span>Build</span>
  </div>
  
  <div className='icon'>
    <i className="fas fa-book"></i>
    <span>Research</span>
  </div>
  <div className='icon'>
    <i className="fas fa-briefcase"></i>
    <span>Manage</span>
  </div>
</div>

        </div>
        <div className='dev-image'>
          <img src='/assets/dev.png' alt='alt' />
        </div>
      </div>

    
    </div>
  );
}

export default Home;
