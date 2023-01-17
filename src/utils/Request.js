export async function request(url) {
    return await fetch(url).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject('Ошибка ${res.status}');
        };
    })

}