import axios from "axios";
const KEY = "AIzaSyCDXYu6WMsRtscaRxpwQldxIzxNVnFUA0Y";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { part: "snippet", maxResult: 25, key: KEY }
});