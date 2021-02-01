import axios from 'axios';

const URL = 'https://gnews.io/api/v4/search';
const API_KEY = 'd35a0460b0cb5afbae5d2a393c556d42';

export const fetchNews = async (query,language,country) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            lang:language,
            country:country,
            token:API_KEY,
        }
    });

    return data;
} 