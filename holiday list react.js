import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [
    { name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    ]
  }

  render() {
    return (
      <div id="main">
        <ol>
          {this.cityList.filter( (city)=>city.country=='India').map( (city,index)=>{
            const key = `location${index + 1}`
            return <li key={key}>{city.name}</li>;
          })}
        </ol>
        
      </div>
    )
  }
}


export default App;