import axios from "axios";

const baseURL: string = "http://localhost:5000";

const ApiClient = axios.create({ baseURL });

export default ApiClient;
