import axios from 'axios'

export default axios.create({
  baseURL: `https://chat-backend-production.up.railway.app`,
})
