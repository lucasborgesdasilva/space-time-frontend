import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// Para usar o axios, tive que baixar a lib axios.
