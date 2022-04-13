import axios from "axios";

const defaultOptions = {
    baseURL: "https://searching-server.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
    },
};

let marat = axios.create(defaultOptions);

marat.interceptors.request.use(function (config) {
    const jwt = localStorage.getItem('user-token');
    config.headers.Authorization = jwt ? `Bearer ${jwt}` : '';
    return config;
});

export default marat;