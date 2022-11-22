import { Activity } from "./../models/activity";
import axios, { AxiosResponse } from "axios";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const repsonseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(repsonseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(repsonseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(repsonseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(repsonseBody),
};

const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  detail: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post<void>(`/activities/`, activity),
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.del<void>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
