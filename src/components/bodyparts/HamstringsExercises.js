import React from 'react';
import Hamstring from '../exercisesJSON/HamstringData';

const HamstringsExercises = () => {

  const ExerciseMap = Hamstring.exercises.map((exercise) => {
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
          <h1 className="exercise-heading-name">Legs (hamstrings)</h1>
          <p className="exercise-about-info">At the back of the leg behind the thigh there are three muscles known as the hamstrings.  These muscles have a lot to do with how flexible we are. The three muscles, semitendinosus, semimembranosus, and biceps femoris (which has two heads) flex the knee and extend the hip (except for one head of the biceps femoris). The hamstrings also cross and act upon the joints of both the hip and the knee.</p>
        </div>
        <p className="hamstrings-exercise-image"></p>
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

export default HamstringsExercises;



