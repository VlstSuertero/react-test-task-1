import Axios from 'axios-observable'
import { timeout, retry } from 'rxjs/operators'

const axiosObs = Axios.create({
    baseURL: 'api/',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const api = {
    request: (endPoint: string, body: never) => {
        const rOptions = {
            url: endPoint,
            ...(body ? {body} : {})
        }

        return axiosObs.request(rOptions).pipe(
            timeout(3000),
            retry(2),
        )
    }
}

Object.freeze(api)

export default api