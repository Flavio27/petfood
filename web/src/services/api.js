import axios from 'axios'

const api = axios.create({
	baseURL: 'https://petfood-feliperochadev.petfood-app.vercel.app',
})

export default api;