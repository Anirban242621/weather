import React, { useState, useEffect } from "react";

const WDetails = ({ TempInfo }) => {
  const [weatherState, setweatherState] = useState("");
  var weatherType = TempInfo.weatherType;
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;
        case "Clear":
          setweatherState("wi-day-sunny");
          break;
        case "Mist":
          setweatherState("wi-dust");
          break;
        case "Rain":
          setweatherState("wi-rain-wind");
          break;
        case "Smoke":
          setweatherState("wi-smoke");
          break;
        case "Snow":
          setweatherState("wi-snow");
          break;
      }
    }
  }, [weatherType]);
  //converting the seconds in min
  let sec = TempInfo.sunset;
  let date = new Date(sec * 1000);
  let timeCon = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{TempInfo.temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{TempInfo.weatherType}</div>
            <div className="place">
              {TempInfo.name},{TempInfo.country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeCon} PM <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {TempInfo.humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {TempInfo.pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {TempInfo.speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WDetails;
