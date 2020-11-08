import axios from 'axios';

export const fetchAll = async () => {
    const url = 'https://disease.sh/v3/covid-19/all';
    const response = await axios.get(url);
    return response.data; 
}

export const fetchCountries = async () => {
    const url = 'https://disease.sh/v3/covid-19/countries';
    const response = await axios.get(url);
    return response.data; 
}

export const fetchCountry = async (countryCode: string) => {
    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const response = await axios.get(url);
    return response.data; 
}