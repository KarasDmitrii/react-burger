

import { request } from "./Request";
const API_URL = 'https://norma.nomoreparties.space/api';

export const getApiIngredients = () => {
    return request((`${API_URL}/ingredients`))
};

