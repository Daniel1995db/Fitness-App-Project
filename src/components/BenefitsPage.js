import React from 'react';
import { Link } from 'react-router-dom';
import MensPage from './MensPage';
import WomensPage from './WomensPage';

const BenefitsPage = () => (
  <div className="benefits-page-container">

    <div className="benefits-page-banner">
      <p className="benefits-banner-img1"></p>
      <p className="benefits-banner-img2"></p>
      <p className="benefits-banner-img3"></p>
      <p className="benefits-banner-img4"></p>
    </div>

    <div className="11-resons-to-workout">
      <h2 className="benefits-to-workout-title">11 Benefits of Exercise</h2>

        <div className="reason-container">
          <h1 className="reason-number">1</h1>
          <h1 className="reason-heading">Boost happiness levels</h1>
          <p className="reason">Whether we’re fully conscious of it or not, we’re always looking for how to be happy. And exercise is one of the most obvious steps to take, as it’s not a coincidence that you feel better after a good workout: It’s science. A Penn State University study found that people who exercised, whether it was a mild, moderate or vigorous workout, had more pleasant feelings than those who didn’t.</p>
        </div>
      <div className="reason-container">
        <h1 className="reason-number">2</h1>
        <h1 className="reason-heading">Learn to set — and achieve ­— goals</h1>
        <p className="reason">Whether it’s deciding to run a 10K, increasing the amount you can deadlift or increasing your bike mileage, setting and achieving fitness goals is an incredible self-confidence boost. But if you find your resolutions falling to the wayside, science has uncovered the secret to success: setting clear intentions.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">3</h1>
        <h1 className="reason-heading">Reduce your risk of heart disease</h1>
        <p className="reason">Get out of the medicine cabinet and reduce your risk of heart disease the natural way. A meta-review of a variety of studies and trials conducted by researchers in 2013 ­— encompassing 305 trials with more than 339,000 participants — found that no statistically detectable differences existed between those who exercised and those who were given medications in the prevention of coronary heart disease and prediabetes.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">4</h1>
        <h1 className="reason-heading">Sleep Better</h1>
        <p className="reason">If you can’t sleep and instead are prone to tossing and turning, exercising can help you sleep better. By strengthening circadian rhythms, exercising can help keep you more bright-eyed during the day and bring on sleep at night. It also promotes better quality sleep.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">5</h1>
        <h1 className="reason-heading">Get an energy boost</h1>
        <p className="reason">When you’re feeling exhausted, the last thing you might want to do is squeeze in a workout. But, according to experts, that’s exactly what you should do. They found that low-intensity exercise, the equivalent of a leisurely stroll, experienced a drop in fatigue levels and a 20 percent energy boost.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">6</h1>
        <h1 className="reason-heading">Increase strength and flexibility</h1>
        <p className="reason">If strength training and stretching aren’t a part of your fitness routine, it’s time to incorporate them. Though many adults engage in cardio activities, quite a few stay away from resistance training and building muscle — and that’s a mistake. <br/> <br/> Strength training, whether you’re lifting weights, doing bodyweight exercises or incorporating yoga moves, helps improve muscle strength and muscle mass, particularly important as we age. It also keeps bones strong, thus serving as a great natural treatment for osteoporosis. Plus, increased muscle helps your body burn calories more efficiently long after your workout is over.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">7</h1>
        <h1 className="reason-heading">Improve memory</h1>
        <p className="reason">Are you constantly misplacing your keys or struggling to recall names? Exercising regularly can help jog your memory. A 2014 study found that aerobic exercise, like running or swimming, boosts the size of the hippocampus, the part of the brain responsible for memory and learning, in women with a recognized risk factor for dementia. Besides looking to brain food to boost your memory and mental skills, start breaking a sweat!</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">8</h1>
        <h1 className="reason-heading">Increase self-confidence</h1>
        <p className="reason">Feeling down on yourself? Exercising can help you feel better about yourself — no matter what type of workout you do or how fit you are. One study found that “the simple act of exercise and not fitness itself can convince you that you look better.” With so much emphasis on our outward appearances in society today, it’s comforting to know that one of the benefits of exercise helps people feel better about themselves and how they look naturally.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">9</h1>
        <h1 className="reason-heading">Perform better at work</h1>
        <p className="reason">Could the key to being more productive and happier at work lie in exercise? One study thinks so. It found that those employees who worked out before work or during their lunch hour reported feeling less stress and being happier and more productive than days when they skipped a workout. Not only that, but they also performed better on exercise days. It’s the perfect excuse for a lunchtime stroll or walking meeting..</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">10</h1>
        <h1 className="reason-heading">Become less susceptible to disease</h1>
        <p className="reason">From fortifying your immune system against future cancers to reducing the risk of breast cancer, regular exercise helps protect your body. Although researchers aren’t entirely sure how exercise boosts immunity, theories range from bacteria being flushed out of the body to a reduction in stress-released hormones that might increase the risk of illness.</p>
      </div>
      <div className="reason-container">
        <h1 className="reason-number">11</h1>
        <h1 className="reason-heading">Live longer</h1>
        <p className="reason">Being there for our loved ones and enjoying as many special moments together as we can — that’s what life really is all about. Keeping your body happy and healthy to help you live a longer, fuller life is one of exercise’s biggest benefits. Therefore, it’s great news that research published in 2012, which studied more than 650,000 people, found that 150 minutes of moderate exercise (or about half hour five days a week) increases your life span by 3.4 years.</p>
      </div>
      

    </div>





  {/* <div>
    <h3 className="gender-selection-instructions">Select your gender to find out more</h3>
    <div className="men-gender-selection">
        <Link to={`/benefits/men`} style={{ textDecoration: 'none' }}>
        <img className="gender-selection-image" src="/images/mike-outside.jpg" />
        <h1 className="gender-selection-text">Men</h1>
      </Link>
    </div>
    <div className="women-gender-selection">
        <Link to={`/benefits/women`} style={{ textDecoration: 'none' }}>
        <img className="gender-selection-image" src="/images/sharon-outside.jpg" />
        <h1 className="gender-selection-text">Women</h1>
      </Link>
    </div>
  </div> */}
  </div>
);

export default BenefitsPage;
