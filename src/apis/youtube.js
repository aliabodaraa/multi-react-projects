import axios from 'axios';

const KEY = 'AIzaSyAXvL3sKLWja3QFqD9mQ1eQ916XOi3O5HU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});