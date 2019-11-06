import React, { Component } from 'react';
import './App.css';
import DropDown from './Components/DropDown';
import Contents from './Components/Contents';
import ApiCall from './ApiCall';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content : [],
      selectedCountry : null
    }
  }

componentDidMount = () => {
  ApiCall.onSelect().then(res => {
    this.setState({
      content : res
    })
  })
}

handleCountryChange = (e) => {
  this.setState({
    selectedCountry : e.target.value
  })
}

// handleClick = () => {
// console.log("Clicked");
// ApiCall.onSelect().then(res => {
//   this.setState({
//     content : res
//   })
// })
// }

  render() {
    // console.log(this.state.content);
    // console.log(this.state.selectedCountry);
    return (
      <div className="App">
        <h3>Country Cards</h3>
        <DropDown countryNames={this.state.content}
                  selectedCountry={this.handleCountryChange}
        />
        <Contents selectedCountryName={this.state.selectedCountry}/>
        {/* <button onClick={this.handleClick}>ApiCall</button>
        <p>Contents : {this.state.content.map(res => res)}</p> */}
      </div>
    );
  }
}

export default App;
