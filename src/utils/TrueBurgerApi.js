import { request } from "./Request";
export const API_URL = 'https://norma.nomoreparties.space/api';

export const getApiIngredients = () => {
    return request((`${API_URL}/ingredients`))
};

export const sendOrderApi = (order) => {

    return request((`${API_URL}/orders`), {
        method: 'POST', 
        body: JSON.stringify(order), 
        headers: { 'Content-Type': 'application/json' }
})
}
