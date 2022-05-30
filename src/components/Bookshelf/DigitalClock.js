import React, { useState, useEffect } from "react";
import "./digital-clock.scss";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  let refreshClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  let timer = () => {
    // //use global date object to access current time
    // let date = new Date();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // //AM or PM ?
    // let amPm = hours > 12 ? "PM" : "AM";
    // //noramlize to 12hr clock
    // if (hours > 12) {
    //   hours -= 12;
    // }
    // //ensure all values are 2 digits
    // let paddedHours = String(hours).padStart(2, "0");
    // let paddedMinutes = String(minutes).padStart(2, "0");
    // let paddedSeconds = String(seconds).padStart(2, "0");
    // let currentTime = `${paddedHours}:${paddedMinutes}:${paddedSeconds} ${amPm}`;
    // console.log(currentTime);
    //loop so values update in near real-time
    // requestAnimationFrame(timer);
  };
  // timer();

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
