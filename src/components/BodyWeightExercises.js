import React from 'react';

const BodyWeightExercises = () => (
  <div>
    
    <div className="workout-page-and-exercises">
      <div className="bodyweight-image"></div>
      <div className="exercises-workouts-info">
        <h1 className="exercises-workouts-heading">Body Weight</h1>
        <p>Body Weight Workouts are an expandable form of workout. The usually can be performed at home, a gym, a park, relatively almost anywhere. All you really need is space for you to move freely, and ofcourse, yourself. Body weight workouts are a great way test your body's limits in ways that require no equipment.</p>

        <p className="bold">Below is an example of how a body weight workout is structured.</p>
      </div>
    </div>

    <div className="workouts">
      <h3 className="workout-exercise-name">Full Body</h3>
      <p className="workout-exercise-description">If you’re new to exercising, try these movements for a solid workout full body workout. We recommend minimizing your resting period as much as possible to maximize your workout.</p>
      <p>Below is a circuit. Repeat this circuit for a total of 2-4 times. Rest 90-120 seconds between circuit.</p>
      <div>
        <h5 className="exercise-movement">Body weight Squats</h5>
        <p>   -20 reps</p>
      </div>
      <div>
        <h5 className="exercise-movement">Walking Lunges</h5>
        <p>   -20 reps (10 each leg)</p>
      </div>
      <div>
        <h5 className="exercise-movement">Body weight Push-ups</h5>
        <p>   -20 reps</p>
      </div>
      <div>
        <h5 className="exercise-movement">Jumping Jacks</h5>
        <p>   -45 seconds</p>
      </div>
      <div>
        <h5 className="exercise-movement">Plank Hold</h5>
        <p>   -45 seconds</p>
      </div>
      <div>
        <h5 className="exercise-movement">Leg Raises</h5>
        <p>   -20 reps</p>
      </div>


    </div>

    <div className="physician-warning">
      <p>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
    </div>

  </div>
);

export default BodyWeightExercises;