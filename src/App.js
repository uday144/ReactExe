import React, { Component } from 'react';
import './App.css';
import Header2 from './components/Header2';
import Navbar from './components/Navbar';
import Content from './components/Content';


class App extends Component {
  
  getRepayment = async (e) => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:8080/getsLoans');
    const data = await api_call.json();
    console.log('data$$$$$$', data);  
  
  }
 
  render() {
    return (
      <div className = "main-div">
      <Header2 />
      <Navbar />
      <Content /> 
      </div>
    );
  }
}

export default App;
