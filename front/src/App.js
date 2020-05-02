import React, { useState, useEffect } from 'react';
import './App.css';
import ParallelCoord from './lib/ParallelCoord'
import { prepareData } from './lib/prepareData'

function App() {

  const [data, setData] = useState(null)
  const categories = ["temp", "cost", "color", "target", "volume"]

  useEffect(() => {
    setInterval(() => {
      fetch('/dataBroker')
        .then(res => res.json())
        .then(data => {
          var parsedData = JSON.parse(JSON.parse(data))
          var preparedData = prepareData(categories, parsedData)
          console.log('prepared data: ', preparedData);
          setData(preparedData)
        })
    }, 500)
  }, [])


  if (data == null) {
    return null
  } else {
    return (
      <div className="App">
        <ParallelCoord style={{ height: '100vh' }} data={data.clusters} />
      </div>
    );
  }
}

export default App;