import React from 'react';
import Traps from '../exercisesJSON/TrapsData';

const TrapsExercises = () => {

  const ExerciseMap = Traps.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Back (Trapezius)</h1>
        <p className="exercise-about-info">The trapezius is one of two large surface muscles that extend longitudinally from the occipital bone to the lower thoracic vertebrae of the spine and laterally to the spine of the scapula. Its moves the scapulae and supports the arm. The trapezius has three functional parts: an upper (descending) part which supports the weight of the arm; a middle region (transverse ), which retracts the scapula; and a lower (ascending) part which medially rotates and depresses the scapula.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};


export default TrapsExercises;