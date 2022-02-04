import React, { useEffect, useState, useCallback } from "react";
import "./search.css";
import WDetails from "./WDetails";

function Search() {
  const [Search, setSearch] = useState("Darjeeling");
  const [TempInfo, setTempInfo] = useState({});
  const fetchCarList = useCallback(() => {
    getWeatherD();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCarList();
  }, [fetchCarList]);

  const getWeatherD = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=4e45f3423e3b9cedc967bca25cc407c0`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0]; //using ':' we can rename field name
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys; //we are declaring first field name and then class name
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
      // console.log(data);
    } catch (err) {
      // console.log(err);
    }
  };
  // api:
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  //API key= 4e45f3423e3b9cedc967bca25cc407c0

  return (
    <>
      <div className="wrap">
        <div className="search">
          <i className="fas fa-cloud-sun-rain"></i>
          <input
            type="search"
            placeholder="City Name"
            id="search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherD}>
            Search
          </button>
        </div>
      </div>
      {/* //This is the weather details page */}
      <WDetails TempInfo={TempInfo} />
      {/* <WDetails {...TempInfo} /> */}
    </>
  );
}

export default Search;

//useEffect
//   useEffect(() => {
//any function here
//   }, [Search]);
//[]-> Dependency array
//what if we leave this [] blank it will work only when we reload the page only once it will work.if we provide function it will work everytime when it will fetch the changes

//Promises -> https://javascript.info/promise-basics
//Imagine that you’re a top singer, and fans ask day and night for your upcoming song.

// To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

// Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song.

// This is a real-life analogy for things we often have in programming:

// A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
// The analogy isn’t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it’s fine to begin with.

// The constructor syntax for a promise object is"
//let promise = new Promise(function (resolve, reject) {
// executor (the producing code, "singer")
//});

//Async Function->https://javascript.info/async-await
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

// works only inside async functions
//let value = await promise;

//Try and Catch
