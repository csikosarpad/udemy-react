import "./SeasonDisplay.css";
import React from "react";

const SeasonDisplay = (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left icon massive`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon-right icon massive`} />
      {/*Latitude: {props.lat}, season: {season} */}
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is cold!",
    iconName: "snowflake",
  },
};

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
