import React from 'react';
import { Link } from 'react-router-dom';
import MensPage from './MensPage';
import WomensPage from './WomensPage';

const BenefitsPage = () => (
  <div className="benefits-page-container">
    <h1>Benefits of Fitnics</h1>
  <div>
    <div className="men-gender-selection">
      <Link to={`/benefits/men`}>
        <img className="gender-selection-image" src="/images/mike-outside.jpg" />
        <h1 className="gender-selection-text">Men</h1>
      </Link>
    </div>
    <div className="women-gender-selection">
      <Link to={`/benefits/women`}>
        <img className="gender-selection-image" src="/images/sharon-outside.jpg" />
        <h1 className="gender-selection-text">Women</h1>
      </Link>
    </div>
  </div>
  </div>
);

export default BenefitsPage;
