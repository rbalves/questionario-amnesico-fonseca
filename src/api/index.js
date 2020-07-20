import axios from 'axios';

const baseURL = `https://jsonbox.io/box_bab6305dea4a8619e485`;

export default axios.create({
    baseURL,
});
