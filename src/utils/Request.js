import { refreshAccessToken } from "../services/user/UserAction";
import PropTypes from 'prop-types';
export async function request(url, options) {
    return await fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            if (res.status === 403) {
                refreshAccessToken().then(() => {
                    fetch(url, options).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                }).catch(err => {return err})
            } else {
                return res
            }
        }
    }
    ).catch(err => {
        
        Promise.reject(`Ошибка ${err.status}`)})
}
request.propTypes = {
    url: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired
};