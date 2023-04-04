import { readCookie } from "../services/user/UserServices";
import { request } from "./Request";
export const API_URL = 'https://norma.nomoreparties.space/api';
export const WSS_URL = 'wss://norma.nomoreparties.space/orders'

export const getApiIngredients = () => {
    return request((`${API_URL}/ingredients`))
};

export const sendOrderApi = (order: {"ingredients": Array<string>}) => {
    const accessToken = 'Bearer ' + readCookie('accessToken')?.toString();
    return request((`${API_URL}/orders`), {
        method: 'POST', 
        body: JSON.stringify(order), 
        headers: { 'Content-Type': 'application/json', 'authorization': accessToken }
})
}
