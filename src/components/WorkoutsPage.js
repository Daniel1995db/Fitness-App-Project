import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutsPage = (props) => (
  <div>
    <h1>Workouts</h1>
    <p>This page is dedicated to the Workout Database</p>
    <Link to={`/workouts/bodyweight`} >Body Weight</Link>
    <Link to={`/workouts/cardio`} >Cardio</Link>
    <Link to={`/workouts/weightlifting`} >Weight Lifting</Link> 
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