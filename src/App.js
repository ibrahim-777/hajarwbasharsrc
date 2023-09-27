import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import ActivityInfo from './Components/Home/Activities/ActivityComponents/ActivityInfo';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs.js'
import Activities from './Components/Home/Activities/Activities';
import ALLActivities from './Components/Home/Activities/ActivityComponents/ALLActivities';
class App extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/ActivityInfo/:id" element={<ActivityInfo />} />
        <Route exact path="/Activities" element={<Activities/>} />
        <Route exact path="/AllActivities" element={<ALLActivities/>} />
        <Route  exact path="/AboutUs" element={<AboutUs />}/>
        <Route  path="/" element={<Home />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
