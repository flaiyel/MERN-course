import { isUndefined } from 'util'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { APIHOST as host } from '../../app.json'
const cookies = new Cookies()


export function calculateExpirationSession() {
    const now = new Date().getTime()
    const newDate = now + 30 * 60 * 1000
    return new Date(newDate)
}

export function getSession() {
    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s')
}

function renovarSession() {
    const session = getSession()
    if(session) {
        cookies.set("_s", session, {
            path: '/',
            expires: calculateExpirationSession()
        })
    } else {
        window.location.href = "/login"
    }

    return session
}

export const request = {
    get: function(service) {
        let token = renovarSession()
        return axios.get(`${host}${service}` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}