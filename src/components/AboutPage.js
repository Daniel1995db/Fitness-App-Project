import React from 'react';

const AboutPage = () => (
  <div className="about-page-container">
    <h1>About Page</h1>
    <p>This space is dedicated for the About Page when a user is not logged in</p>
    <img className="main-image" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />

  <div>
    <div className="men-gender-selection">
      <img className="gender-selection-image" src="/images/mike-outside.jpg" />
      <h1 className="gender-selection-text">Men</h1>
    </div>
    <div className="women-gender-selection">
      <img className="gender-selection-image" src="/images/sharon-outside.jpg" />
      <h1 className="gender-selection-text">Women</h1>
    </div>
  </div>
  </div>
);

export default AboutPage;