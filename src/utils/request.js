import config from '@config'
import axios from 'axios'

/* Constants */
import FetchStatus from '@constants/fetchStatus'

const { FETCHING, FETCHED, ERROR } = FetchStatus

const defaultHeaders = { 'Content-Type': 'application/json' }

// generic request handler, optionally: can update the fetchStatus of the call
export default ({ url, method, data = {}, headers = defaultHeaders }, fetchState = () => {}) => {
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

    fetchState(FETCHING)
    return axios
        .request({
            url: `${config.api.basePath}${url}`,
            method,
            headers,
            [dataOrParams]: data,
        })
        .then(res => {
            fetchState(FETCHED)
            return Promise.resolve(res.data)
        })
        .catch(e => {
            fetchState(ERROR)
            return Promise.reject(e)
        })
}
