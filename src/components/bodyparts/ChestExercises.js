import React from 'react';
import Chest from '../exercisesJSON/ChestData';

// export const ChestPage = () => (
//   <div>
//     <h1>Chest (pectorals)</h1>
//     <p>Pectoralis major is a thick, fan-shaped muscle, which makes up the bulk of the chest muscle. It lies under the breast. It serves to flex, extend, and rotate the humerus, the long bone of the upper arm.</p>
//   </div>
// );

const ChestExercises = () => {
  
  const ExerciseMap = Chest.exercises.map((exercise) => {
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
        <h1 className="exercise-heading-name">Chest (pectorals)</h1>
        <p className="exercise-about-info">Pectoral muscles (commonly referred to as "pecs") are the muscles that connect the front of the human chest with the bones of the upper arm and shoulder. Pectoralis major is a thick, fan-shaped muscle, which makes up the bulk of the chest muscle. It lies under the breast. It serves to flex, extend, and rotate the humerus, the long bone of the upper arm.</p>
      </div>
      {ExerciseMap}
    </div>
  )
};


export default ChestExercises;

