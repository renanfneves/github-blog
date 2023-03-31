import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API,
  // headers: {
  //   Authorization: `Bearer ${import.meta.env.VITE_BLOG_APP_TOKEN}`,
  // },
})
