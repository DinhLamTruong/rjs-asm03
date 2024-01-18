import React from 'react';
import './Footer.css';

const DUMMY_LINKS = {
  customerServices: [
    'help & contact us',
    'returns & refunds',
    'online store',
    'terns & coditions',
  ],
  company: ['what we do', 'avaialbe services', 'latest post', 'FAQs'],
  socialMedia: ['twiter', 'instagram', 'facebook', 'pinterest'],
};

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footertContent">
        <div className="container">
          <div className="row" style={{ height: '100px' }}>
            <div className="col">
              <h5>customer services</h5>
              <ul>
                {DUMMY_LINKS.customerServices.map(link => (
                  <li key={link}>
                    <a href="/#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h5>company</h5>
              <ul>
                {DUMMY_LINKS.company.map(link => (
                  <li key={link}>
                    <a href="/#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h5>social media </h5>
              <ul>
                {DUMMY_LINKS.socialMedia.map(link => (
                  <li key={link}>
                    <a href="/#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
