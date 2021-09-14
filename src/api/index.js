import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {

    let changableurl = url;

    if(country) {
        changableurl = `${url}/countries/${country}`;
    }

    try {
        // const { data } = await axios.get(url);
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     countries: data.countries,
        //     lastUpdate: data.lastUpdate,
        // }
        // return modifiedData;

        const { data: { confirmed, recovered, deaths, countries, lastUpdate} } = await axios.get(changableurl);
        // const modifiedData = { confirmed, recovered, deaths, countries, lastUpdate };
        // return modifiedData;

        return { confirmed, recovered, deaths, countries, lastUpdate };

    } catch (error) {
        console.error("error fetching data", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({ 
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
         }));
        return modifiedData;
    } catch (error) {
        console.log("error getting daily data", error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log("error getting countries", error);
    }
}
