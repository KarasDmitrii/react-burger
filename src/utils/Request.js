// export async function request(url) {
//     return await fetch(url).then(res => {
//         if (res.ok) {
//             return res.json();
//         } else {
//             return Promise.reject('Ошибка ${res.status}');
//         };
//     })

// }
export async function request(url, options) {
    console.log(options);
    return await fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        };
    })

}