import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://buus-booking-app-master1-4gc4-backend1.vercel.app/'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
