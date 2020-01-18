import Axios from "axios";


const api = Axios.create({
    baseURL: 'exp://192.168.0.104:3333' //porta default android é 10.0.2.2
})

export default api