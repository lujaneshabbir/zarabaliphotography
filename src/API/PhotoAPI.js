import { api } from "./config/axiosConfig"

export const PhotoAPI = {
  filter: async function () {
    const response = await api.request({
      url: `/filter`,
      method: "POST",
      data: {
        filters: ["nana"]
      }
    })

    // returning the product returned by the API
    return response.data
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/products/",
      method: "GET"
    })

    return response.data
  }
}