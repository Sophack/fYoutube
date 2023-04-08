const axios = require("axios");


  //we dont need to specify that this is a GET request as it will be made clear by axios
    // method: 'GET',

export const BASE_URL = 'https://youtube-v38.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

//call api, pass dynamic URL & call it from any component 
export const fetchFromApi = async (url) => {
    //pass the path to url string through the api key
       const { data } =  await axios.get(`${BASE_URL}/{url}`, options)

       return data;
    }