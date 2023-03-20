import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '2c07a8c4d1mshf2a05a4b735238ep1bf907jsn26d16ade65d2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApiData = async(url) => {
        const {data} = await axios.get(`${BASE_URL}/${url}` , options)
        return data;
  }
  