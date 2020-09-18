import axios from 'axios';

const baseURL = `https://jsonbox.io/box_9da5210c1a35783aa3a7`;

export default axios.create({
    baseURL,
});
