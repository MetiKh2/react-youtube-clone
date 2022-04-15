import axios from "axios";
const baseUrl = 'https://www.googleapis.com/youtube/v3';
export default axios.create({
    baseURL:baseUrl,
    params:{
        part:'snippet',
       //maxResults:5,
        key:'---'
    }
})
