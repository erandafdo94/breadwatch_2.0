import axios, { AxiosResponse } from "axios";
import { MonthlyIncomeExpenseStats } from "../Models/monthlyIncomeExpenseStats";

const sleep = (delay: number) =>{
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})
axios.defaults.baseURL = 'http://localhost:5086/api'

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get:async <T> (url: string) => await axios.get<T>(url).then(responseBody),
    post:async<T>(url: string, body:{}) => await axios.post<T>(url, body).then(responseBody),
    put:async <T> (url: string, body:{}) => await axios.put<T>(url, body).then(responseBody),
    del:async <T> (url: string) => await axios.delete<T>(url).then(responseBody),
}

const Accounts = {
    stats: (userId:number) => requests.get<MonthlyIncomeExpenseStats>('/Transaction/get-monthly-stats/' + userId)
}

const agent = {
    Accounts
}

export default agent;
