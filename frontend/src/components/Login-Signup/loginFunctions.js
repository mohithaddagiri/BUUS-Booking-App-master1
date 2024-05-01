import axios from 'axios'

export function logUserIn(userCredentials) {
    let apiUrl = 'https://buus-booking-app-master1-4gc4-backend1.vercel.app/'
    return axios.post(apiUrl,userCredentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
 

export function loadRoutes(){
    const authToken = sessionStorage.getItem('authToken' || '')
    let apiUrl = `https://buus-booking-app-master1-4gc4-backend1.vercel.app/`
    return axios.get(apiUrl)
}

export function getCurrentUserDetails(authToken){
    const token =  authToken
    let apiUrl = `https://buus-booking-app-master1-4gc4-backend1.vercel.app/`
    return axios.get(apiUrl)
}