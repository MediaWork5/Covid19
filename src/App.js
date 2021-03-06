import React, { Component} from 'react';

import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api/index';
import image from './images/covide19.png';
import styles from './App.module.css'

class App extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        if(country === 'global') {
            country = '';
        }
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
