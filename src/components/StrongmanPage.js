import React from 'react';

const StrongmanPage = () => (
  <div>
    
    <div className="workout-page-and-exercises">
      <div className="strongman-image"></div>
      <div className="exercises-workouts-info">
        <h1 className="exercises-workouts-heading">Strongman</h1>
        <p>Strongman Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni laborum quas magnam eveniet exercitationem laboriosam adipisci. Quisquam aperiam harum unde maiores atque, quos soluta ex cupiditate sunt, voluptatum possimus ipsum?</p>

        <p className="bold">Below is an example of how a Strongman workout is structured.</p>
      </div>
    </div>

    <div className="workouts">
      <h3 className="workout-exercise-name">Lower Body</h3>
      <p className="workout-exercise-description"></p>
      <p>Rest 90-120 seconds between sets</p>
      <div>
        <h5 className="exercise-movement">Barbell Hip Thrust</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>4 sets of 6 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Split Squat</h5>
        <p>2 warm-up sets of 8 reps</p>
        <p>6 sets of 4-6 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Barbell Sumo Deadlift</h5>
        <p>2 warm-up sets of 10 reps</p>
        <p>5 sets of 5 reps (Maximum weight)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Farmers Walk</h5>
        <p>5 sets of 50 feet (Maximum weight)</p>
      </div>
    </div>

    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>
  </div>
);

export default StrongmanPage;