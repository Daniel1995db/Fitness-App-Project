import React from 'react';
import Quadriceps from '../exercisesJSON/QuadricepsData';

const QuadricepsExercises = () => {

  const ExerciseMap = Quadriceps.exercises.map((exercise) => {
    return (
      <div className="exercise-instructions-cointainer">
        <p className="exercise-instruction-name">{exercise.name}</p>

        <div className="exercise-instructions-cointainer-flex">
          <p className="exercise-instruction-text-img1">Starting Position</p>
          <p className="exercise-instruction-text-img2">Ending Position</p>
        </div>
        <div className="exercise-instructions-cointainer-flex">
          <img className="exercise-instruction-img1" src={exercise.images[0]} />
          <img className="exercise-instruction-img2" src={exercise.images[1]} />
        </div>

      </div>
    );
  })
  return (
    <div className="exercises-body-page">

      <div className="exercise-info-container">
        <div className="exercise-description-info">
          <h1 className="exercise-heading-name">Legs (quadriceps)</h1>
          <p className="exercise-about-info">The Latin translation of "quadriceps" is "four headed," as the group contains four separate muscles: the vastus lateralis, vastus medialis, vastus intermedius, and the rectus femoris. Each of the vastus muscles originates on the femur bone and attaches to the patella, or kneecap. The three vastus muscles are also partially covered by the rectus femoris, which also attaches to the kneecap. However, unlike the vastus muscles, the rectus femoris inserts into the hip bone.</p>
        </div>
        <p className="quadriceps-exercise-image"></p>
      </div>

      <div className="exercises-loop">
        <div className="exercises-info">
          <p>Listed below are a number of exercises (with images) on how to properly execute a movement Each exercise is meant to target the muscle shown above.</p>
          <p>The exercises are a mixture of HIIT, body weight, weight lifting, and powerlifting movements.</p>
          <p>The starting and ending images are a guide to the proper execution of the movement.</p>
        </div>

        <h3 className="list-of-exercises-heading">Exercises</h3>
        <div className="exercises-warning">
          <p>WARNING! We strongly recommend stretching and warming up, to get blood flowing to the muscle, before executing any exercise.</p>
        </div>
        {ExerciseMap}
      </div>

    </div>
  )
};

export default QuadricepsExercises;

