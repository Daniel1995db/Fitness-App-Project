import React from 'react';
import Calves from '../exercisesJSON/CalvesData';

const CalvesExercises = () => {

  const ExerciseMap = Calves.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Legs (Calves)</h1>
        <p className="exercise-about-info">The calves consist of a lot of muscles, but the two that are most important from an aesthetic perspective are the gastrocnemius and the soleus. The gastrocnemius consists of a nearly equal amount of slow and fast twitch muscle fibres (like most muscles in the body), and is engaged when the leg is straight. The soleus predominantly consists of slow twitch fibres, and is engaged both when the leg is straight and bent.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};

export default CalvesExercises;