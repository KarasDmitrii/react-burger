import { refreshAccessToken } from "../services/user/UserAction";
import PropTypes from 'prop-types';
import { IPromise } from "./types";

interface IOptions {
    method?: string,
    body?: string,
    headers?: { 'Content-Type': string, authorization?: string}
    
}

export async function request(url: string, options?: IOptions): Promise<IPromise> {
    return await fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            if (res.status === 403) {
                (refreshAccessToken() as unknown as Promise<unknown>).then(() => {
                    fetch(url, options).then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                    })
                }).catch((err: Error) => { return err })
            } else {
                return res
            }
        }
    }
    ).catch(err => {

        Promise.reject(`Ошибка ${err.status}`)
    })
}
request.propTypes = {
    url: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired
};