import React, { Component } from 'react';
import Location from '../components/Location';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
  constructor(value){
    super()
    this.state={
      latitude:[],
      longitude:[]
    }
  }
   
  componentDidMount(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response=> response.json())
    .then(data=>{
      this.setState({latitude:data.iss_position.latitude});
      this.setState({longitude:data.iss_position.longitude});
      }
    );
  } 
  
  render(){
    const {latitude, longitude}=this.state;
    if(latitude.length===0){
      return <h1>Loooading</h1>
    } else{
        return (
            <div>
               <h1 className='f1'>LIVE I.S.S. Locator</h1>  
             <ErrorBoundry>
               <Location latitude={latitude} longitude={longitude}/>
             </ErrorBoundry>
               <p>reload to update coordinates</p>
            </div>
           );
      }
  }
}

export default App;