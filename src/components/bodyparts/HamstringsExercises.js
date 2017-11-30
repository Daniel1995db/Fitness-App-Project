import React from 'react';
import Hamstring from '../exercisesJSON/HamstringData';

const HamstringsExercises = () => {

  const ExerciseMap = Hamstring.exercises.map((exercise) => {
    return (
      <div className="exercise-instructions-cointainer">
        <p className="exercise-instruction-name">{exercise.name}</p>
        <p className="exercise-instruction-text-img1">Starting Position</p><img className="exercise-instruction-img1" src={exercise.images[0]} />
        <p className="exercise-instruction-text-img2">Ending Position</p><img className="exercise-instruction-img2" src={exercise.images[1]} />
      </div>
    );
  })
  return (
    <div>
      <div>
        <h1 className="exercise-heading-name">Legs (Hamstrings)</h1>
        <p className="exercise-about-info">At the back of the leg behind the thigh there are three muscles known as the hamstrings.  These muscles have a lot to do with how flexible we are. The three muscles, semitendinosus, semimembranosus, and biceps femoris (which has two heads) flex the knee and extend the hip (except for one head of the biceps femoris). The hamstrings also cross and act upon the joints of both the hip and the knee.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default HamstringsExercises;