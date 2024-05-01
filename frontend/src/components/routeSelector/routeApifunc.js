import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "https://buus-booking-app-master1-4gc4-backend1.vercel.app//"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}