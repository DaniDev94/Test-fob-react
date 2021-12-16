import { BASE_URL } from './apiRoutes'
import axios from "axios";

export const getAllInfo = async () => {
    try {
        const req = await axios.get(BASE_URL);
        return req;
    } catch (err) {
        console.log(err)
    }
}