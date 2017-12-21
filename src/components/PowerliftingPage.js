import React from 'react';

const PowerliftingPage = () => (
  <div>
    
    <div className="workout-page-and-exercises">
      <div className="powerlift-image"></div>
      <div className="exercises-workouts-info">
        <h1 className="exercises-workouts-heading">Power Lifting</h1>
        <p>Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift. As in the sport of Olympic weightlifting, it involves the athlete attempting a maximal weight single lift of a barbell loaded with weight plates.</p>

        <p className="bold">Below is an example of how a power lifting workout is structured.</p>
      </div>
    </div>

    <div className="workouts">
      <h3 className="workout-exercise-name">Full Body</h3>
      <p className="workout-exercise-description"></p>
      <p>Rest 90-120 seconds between sets</p>
      <div>
        <h5 className="exercise-movement">Barbell Squat</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>5 sets of 3 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Deadlift</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>5 sets of 3 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Bench Press</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>5 sets of 3 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Military Overhead Press</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>5 sets of 3 reps (Maximum weight)</p>
      </div>
    </div>

    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>
  </div>
);

export default PowerliftingPage;