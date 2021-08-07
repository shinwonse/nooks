import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if(callback && typeof callback === "function"){
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(callback && typeof callback === "function"){
      callback(false);
    }
  };
  return { element, triggerFullScreen, exitFull };
};

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullScreen, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F076%2F2020%2F09%2F06%2F2020090601000581700036162_20200906165815154.jpg&type=sc960_832"
          alt="오지환"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
