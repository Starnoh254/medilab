import axios from "axios";

const refresh_token = localStorage.getItem("refresh_token")

const AxiosInstance = axios.create({
    baseURL: "https://modcom.pythonanywhere.com/api",
    timeout: 30000,
    headers: {
        'Content-Type': "application/json" ,
        'Authorization': `Bearer ${refresh_token}`
    },

});

export default AxiosInstance;