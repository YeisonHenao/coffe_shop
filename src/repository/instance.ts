import axios, { AxiosInstance } from 'axios'

const baseURL: string = "https://fake-coffee-api.vercel.app/"

const instance: AxiosInstance = axios.create({
  baseURL: baseURL
})

export default instance