import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, its cold',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth());
  let { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
