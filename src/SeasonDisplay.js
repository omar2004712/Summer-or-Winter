import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth());
  let text = season === 'summer' ? "let's hit the beach" : "Burr it's chilly";
  let icon = season === 'summer' ? 'sun' : 'snowflake';

  return (
    <div>
      <i className={`icon ${icon}`}></i>
      <h1>{text}</h1>
      <i className={`icon ${icon}`}></i>
    </div>
  );
};

export default SeasonDisplay;
