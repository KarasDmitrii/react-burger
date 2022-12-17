

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

const GetIngredients = async ({setState}) => {
    
    const result = await fetch(`${BURGER_API_URL}/ingredients`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject('Ошибка ${res.status}');
            }
        })
        .then((obj) => {
            setState({
                isDone: true,
                data : obj.data});
        })
        .catch(e => { console.log(e); });
    return (result);
}


export default GetIngredients;