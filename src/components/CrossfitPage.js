import React from 'react';

const CrossfitPage = () => (
  <div>
    
    <div className="workout-page-and-exercises">
      <div className="crossfit-image"></div>
      <div className="exercises-workouts-info">
        <h1 className="exercises-workouts-heading">CrossFit</h1>
        <p>CrossFit is constantly varied functional movements performed at high intensity. All CrossFit workouts are based on functional movements, and these movements reflect the best aspects of gymnastics, weightlifting, running, rowing and more. Al though it invloves some form of bodyweight and weightlifting exercises, it revolves around High Intensity Interval Training (HIIT).</p>

        <p className="bold">Below is an example of how a CrossFit workout is structured.</p>
      </div>
    </div>

    <div className="workouts">
      <h3 className="workout-exercise-name">Full Body</h3>
      <p className="workout-exercise-description"></p>
      <p>Rest 60-90 seconds between sets</p>
      <div>
        <h5 className="exercise-movement">Mile Run</h5>
        <p>As fast as possible</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Thrusters</h5>
        <p>5 sets of as many reps as possible in 1 minute</p>
      </div>
      <div>
        <h5 className="exercise-movement">Pull Ups</h5>
        <p>As many reps as possible in 3 minutes</p>
      </div>
      <div>
        <h5 className="exercise-movement">Mile Run</h5>
        <p>As fast as possible</p>
      </div>
    </div>

    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>

  </div>
);

export default CrossfitPage;