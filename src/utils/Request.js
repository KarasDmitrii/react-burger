export async function request(url, options) {
    return await fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        };
    })

}