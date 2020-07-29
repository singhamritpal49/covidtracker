import React from 'react';

import styles from'./App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import coronaImage from './images/image.png'
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from "./API/";

class App extends React.Component {
   state = {
      data: {},
      country: ''
   }
  async componentDidMount() {
    const data = await fetchData()
      this.setState({data: data})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    // console.log(fetchedData);
    // console.log(country);
    this.setState({data: fetchedData,country: country})
  }

  render() {
    return (
      <>
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVIDIMAGE"/>
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>      
      </div>

      </>

    )
  }
}

export default App;
