import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api/index'

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            setCountry(await fetchCountries());
        }

        fetchCountry();
    },[setCountry]);

    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} className={styles.select}>
                    <option value="global">Global</option>
                    {country.map((Coun, i) => <option key={i} value={Coun}>{Coun}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;