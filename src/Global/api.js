import axios from "axios";

const email = "rifkiokta105@gmail.com";
const instance = axios.create({
  baseURL: `https://todo.api.devcode.gethired.id/`,
  timeout: 20000,
});

export const getData = async () => {
  const res = await instance.get(`activity-groups?email=${email}`);
  return res.data;
};

export const postData = async (data) => {
  const res = await instance.post(`activity-groups`, data);
  return res.data;
};

export const deleteData = async (id) => {
  const res = await instance.delete(`activity-groups/${id}`);
  return res.data;
};

export const detailData = async (id) => {
  const res = await instance.get(`activity-groups/${id}`);
  return res;
};

export const patchDetailData = async (id, data) => {
  const res = await instance.patch(`activity-groups/${id}`, data);
  return res;
};

export const postTodoItems = async (data) => {
  const res = await instance.post(`todo-items`, data);
  return res;
};

export const deleteTodoItems = async (id) => {
  const res = await instance.delete(`todo-items/${id}`);
  return res;
};

export const patchTodoItems = async (id, data) => {
  const res = await instance.patch(`todo-items/${id}`, data);
  return res;
};
