

export const GetApiIngredients = () => {
    const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject('Ошибка ${res.status}');
            }
        })
        .catch(e => { console.log(e); });
   
};
//  res.json();
