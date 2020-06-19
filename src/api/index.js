import axios from 'axios';

const url = 'https://restcountries.eu/rest/v2/all';

export const fetchData = async () => {
    try {
        const { data }  = await axios.get(url);

        const modifiedData = data.map((dailyData) => ({
            name: dailyData.name,
            capital: dailyData.capital,
            flag: dailyData.flag,
        }))




        
        return modifiedData;
        
    } catch (error) {
        
    }
}


// const modifiedData = data.map((dailyData) => ({
//     confirmed: dailyData.confirmed.total,
//     deaths: dailyData.deaths.total,
//     date: dailyData.reportDate,
// }))

// const { data: { countries } } = await axios.get(`${url}/countries`);
// return countries.map((country) => country.name);