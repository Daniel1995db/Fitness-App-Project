import React from 'react';

const WeightLiftingExercises = () => (
  <div>

    <div className="workout-page-and-exercises">
      <div className="weightlifting-image"></div>
      <div className="exercises-workouts-info">
        <h1 className="exercises-workouts-heading">Weight Lifting</h1>
        <p>Weight lifting is a unique form of training. It can provide various goals to fit your need. Whether its fat loss, weight loss, muscle gain, weight gain, or weight maintain, weight lifting can assist with that</p>

        <p className="bold">Below is an example of how a weightlifting workout is structured.</p>
      </div>
    </div>

    <div className="workouts">
      <h3 className="workout-exercise-name">Chest Workout</h3>
      <p className="workout-exercise-description">If you’re new to weightlifting, try these movements for a solid workout. Grab mmoterate wieght. Weight should never be to heavy to where you cant finish your set. It also shouldn't be to light to where you finish it with ease.</p>
      <p>Rest 60-90 seconds between sets</p>
        <div>
          <h5 className="exercise-movement">Barbell Flat Bench Press</h5>
          <p> - 3 sets of 10</p>
        </div>
        <div>
          <h5 className="exercise-movement">Barbell Incline Bench Press</h5>
          <p> - 3 sets of 10</p>
        </div>
        <div>
          <h5 className="exercise-movement">Dumbbell Fat Bench Press</h5>
          <p> - 2 sets of 15</p>
        </div>
        <div>
        <h5 className="exercise-movement">Dumbbell Incline Bench Press</h5>
          <p> - 2 sets of 15</p>
        </div>
        <div>
          <h5 className="exercise-movement">Dumbbell Fly's</h5>
          <p> - 3 sets of 15</p>
        </div>
        <div>
          <h5 className="exercise-movement">Push-ups</h5>
          <p> - 2 sets to failure</p>
        </div>
    </div>

    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>

  </div>
);

export default WeightLiftingExercises;