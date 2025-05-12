import axios from "axios"

export const contentfulClient = axios.create({
  baseURL: `https://contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/`,
  headers: {
    "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
  }
})
