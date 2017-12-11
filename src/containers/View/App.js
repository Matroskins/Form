
import React, { Component } from 'react';
import { compose, withHandlers, withState } from 'recompose';
import Main from './Main.js';

const url = 'https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=9cbe7856cf6d27f5f576a22aa58a5045';


class App extends Component {

  componentDidMount() {
    const setFetchedData = this.props.setFetchedData;
    fetch(url, {
      method: 'get',
  })
  .then(response => response.json())
  .then(data =>{
    console.log('start');
    setFetchedData(data);
    console.log(JSON.stringify(data));
    }).catch(function(err){
      console.log('Request failed', err);
    })
   }

  render() {
    return (<Main fetchedDataObject={this.props.fetchedDataObject} />);
  }
}


const enhance = compose(
  withState('fetchedDataObject', 'setFetchedData', null)
);

export default enhance(App);
