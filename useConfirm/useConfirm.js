import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof callback !== "function") {
    return;
  }
  if (onCancel && typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
        onConfirm();
    } else {
        onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
