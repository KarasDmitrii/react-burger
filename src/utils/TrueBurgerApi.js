import { request } from "./Request";
const API_URL = 'https://norma.nomoreparties.space/api';

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

    // return await fetch('https://norma.nomoreparties.space/api/orders',
    // {
    //     method: 'POST',
    //     body: JSON.stringify(order), 
    //     headers: { 'Content-Type': 'application/json' }
    // })
    // .then(res => {
    //     if (res.ok) {
    //         return console.log(res.json());
    //     } else {
    //         return Promise.reject(`Ошибка ${res.status}`);
    //     };
    // })