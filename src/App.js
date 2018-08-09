import React, { Component } from 'react';
import logo from './logo.svg';
import Computerkeyboard from './images/computerkeyboard.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">David Smith Developer Portfolio - IN DEVELOPMENT COMING SEPTEMBER 2018!</h1>
        </header>
        <p className="App-intro">
          Welcome to my personal developer portfolio which is currently in development.
          I am currently at the Kodiri bootcamp and learning Javascript and React from scratch.
          Make sure you follow my progress on twitter @DavidScreative and my linkedIn profile.  I am looking for an internship/junior dev position and enjoy developing for the web and voice services such as Alexa and Google Assistant.
          I am active at technology meetups and regularly attend Amazon Appsters, Alexa Devs, Linuxing in London (I am co-organiser of this group), and enjoy attending hackathons and voice development workshops.</p>
      <img src="./images/computerkeyboard.jpg>" className="Image" alt="Image of a laptop"/>
      </div>
    );
  }
}

export default App;
