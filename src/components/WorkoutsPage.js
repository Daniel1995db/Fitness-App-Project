import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutsPage = (props) => (
  <div>
    <h1>Workouts</h1>
    <p>browse our workout templates for inspiration</p>

  <div className="workout-selection-container">

    <div className="workout-selection">
      <Link to={`/workouts/cardio`} style={{ textDecoration: 'none' }}>
        <div className="cardio-workout-selection">
          <h3>Cardio</h3>
          <p>A physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process.</p>
        </div>
      </Link>
    </div>

    <div className="workout-selection">
      <Link to={`/workouts/bodyweight`} style={{ textDecoration: 'none' }}>
        <div className="bodyweight-workout-selection">
          <h3>Body Weight</h3>
          <p>Training that serves as your foundation and is the driver of all of your other strengths and skills.</p>
        </div>
      </Link>
    </div>

    <div className="workout-selection">
      <Link to={`/workouts/weightlifting`} style={{ textDecoration: 'none' }}>
        <div className="weightlifting-workout-selection">
          <h3>Weight Lifting</h3>
          <p>A common type of strength training for developing the strength and size of skeletal muscles</p>
        </div>
      </Link>
    </div>

    <div className="workout-selection">
      <Link to={`/workouts/crossfit`} style={{ textDecoration: 'none' }}>
        <div className="crossfit-workout-selection">
          <h3>Crossfit</h3>
          <p>Training that reflects the best aspects of gymnastics, weightlifting, running, rowing and more.
          </p>
        </div>
      </Link>
    </div>

    <div className="workout-selection">
      <Link to={`/workouts/powerlifting`} style={{ textDecoration: 'none' }}>
        <div className="powerlifting-workout-selection">
          <h3>Power Lifting</h3>
          <p>A strength training maximizing the three main compound movements. Squats. Bench Press. Deadlift.</p>
        </div>
      </Link>
    </div>

    <div className="workout-selection">
      <Link to={`/workouts/strongman`} style={{ textDecoration: 'none' }}>
        <div className="strongman-workout-selection">
          <h3>Strongman</h3>
          <p>The stuff of Legends. Centered around brute force, explosive power, and grip strength.
          </p>
        </div>
      </Link>
    </div>

      {/* <p className="warning">Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or taking any dietary supplement. The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p> */}

  </div>

    

  </div>
);

export default WorkoutsPage;


// ------------ FOr body building.com web scrape

// var results = $$(".ExResult-row").map(c => ({
//   name: $x("normalize-space(./descendant::h3[1]/a/text())", c),
//   images: [
//     $x("normalize-space(./descendant::img[1]/@src)", c),
//     $x("normalize-space(./descendant::img[2]/@src)", c)
//   ],
//   muscle: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' ExResult-muscleTargeted ')]/a/text())", c),
//   equipment: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' ExResult-equipmentType ')]/a/text())", c),
//   rating: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' ExRating-badge ')]/text())", c),
//   link: $x("normalize-space(./descendant::a[1]/@href)", c),
//   type: "cardio"
// }));
// JSON.stringify(results);