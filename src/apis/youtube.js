import axios from 'axios';

//used inside of the browser, we need to make this an environment variable
const KEY = 'AIzaSyDyU8boTQNGX-XutFBd1eWWm_8lXlM2Wh4';

//preconfigured instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});