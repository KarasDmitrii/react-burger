export const ADD_USER = 'ADD_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// export const addUser = ({name, login, password}) => {
//     return{
//         type: ADD_USER,
//         payload: {
//             name: name,
//             login: login,
//             password: password
//         }
//     }
// };
// export const loginUser = ({login, password, users}) => {
    

// }

export const logoutUser = () => {
    return {
        type: LOG_OUT
    };
};
export const loginUser = () => {
    return {
        type: LOG_IN
    };
};