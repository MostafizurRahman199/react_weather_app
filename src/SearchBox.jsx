import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import ResultBox from './ResultBox';

export default function SearchBox() {

    let [city, setCity] = useState("");
    let [loading, setLoading] = useState(false);
    let [searchResults, setSearchResults] = useState(null);

    const API_KEY = '05cba27e535db29bad44e8eae4d668b6';
    
    const weatherInfo = async () => {
        setLoading(true);
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        try {
            let data = await fetch(API_URL);
            let originalData = await data.json();

            const importantWeatherData = {
                city: originalData?.name,
                country: originalData?.sys?.country,
                temperature: originalData?.main?.temp,
                feelsLike: originalData?.main?.feels_like,
                humidity: originalData?.main?.humidity,
                pressure: originalData?.main?.pressure,
                windSpeed: originalData?.wind?.speed,
                weather: originalData?.weather[0]?.description,
                sunrise: new Date(originalData?.sys?.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(originalData?.sys?.sunset * 1000).toLocaleTimeString(),
            };

            setSearchResults(importantWeatherData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (city) {
            weatherInfo();
            setCity("");
        }
    }

    return (

        <div className='h-screen w-full flex flex-col justify-start items-center my-8'>
            <h3 className='text-2xl font-thin my-4'>Search Weather</h3>

            <form action="" onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                <TextField onChange={handleChange} value={city || ''} required id="city" size='small' label="City Name" variant="outlined" />
                <Button type='submit' variant="contained" startIcon={<SearchIcon />}>Search</Button>
            </form>

         {loading ? (
                <div className='w-full h-96 flex justify-center items-center'>
                     <span className="loading loading-dots loading-lg"></span>
                </div>
        ) : (
        searchResults ? (
            <ResultBox searchResults={searchResults} />
        ) : (
            <h1 className='text-gray-400 text-xl mt-8'>No data found, Search based on City name</h1>
        )
        )}

        </div>
    )
}
