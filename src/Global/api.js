import axios from "axios";

const email = 'rifkiokta105@gmail.com'
const instance = axios.create({
    baseURL: `https://todo.api.devcode.gethired.id/activity-groups`,
    timeout: 20000
})


export const getData = async () => {
    const res = await instance.get(`?email=${email}`)
    return res.data
}

export const postData = async (data) => {
    const res = await instance.post(``, data)
    return res.data
}

export const deleteData = async (id) => {
    const res = await instance.delete(`/${id}`)
    return res.data
}

export const detailData = async (id) => {
    const res = await instance.get(`/${id}`)
    return res
}

export const patchDetailData = async (id, data) => {
    const res = await instance.patch(`/${id}`, data)
    return res
}