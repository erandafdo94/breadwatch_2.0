import axios, { AxiosResponse } from "axios";
import { MonthlyIncomeExpenseStats } from "../models/monthlyIncomeExpenseStats";

axios.defaults.baseURL = 'http://localhost:5086/api'

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get:<T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T>(url: string, body:{}) => axios.post<T>(url, body).then(responseBody),
    put:<T> (url: string, body:{}) => axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Accounts = {
    stats: (userId:number) => requests.get<MonthlyIncomeExpenseStats>('/Transaction/get-monthly-stats/' + userId)
}

const agent = {
    Accounts
}

export default agent;
