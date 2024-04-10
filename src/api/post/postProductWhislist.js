import axios from "axios";
import { BASE_URL } from "../const";

export  async function postProductWhislist(data){

    const response = await axios.post(`${BASE_URL}/users/wishlist/${data}`);
    return response.data;
}