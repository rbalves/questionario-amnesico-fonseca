import axios from 'axios';

const baseURL = `https://jsonbox.io/box_8da2d76518e3f59ad4e9`;

export default axios.create({
    baseURL,
});
