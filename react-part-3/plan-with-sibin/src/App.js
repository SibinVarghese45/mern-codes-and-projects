import React from "react";
import data from './data'
import Tours  from "./components/Tours";
import { useState } from "react";

const App = () => {

  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour =>  tour.id !== id);
    setTours(newTours)
  }

  return (
    <div>
      <h2>Plan With Sibin</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
