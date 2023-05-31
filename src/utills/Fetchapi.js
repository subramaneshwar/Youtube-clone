import axios from 'axios';
export const Base_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': '9d5249968amsh9cbe2acb24e40d1p160a8ajsnf3d65019b584',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchApi = async (url) => {
  const data = await axios.get(`${Base_URL}/${url}`,options)
  return data
}