import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import path from "path";
import { Dashboard } from "../../Features/Dashboard/dashboard";
import { AddTransaction } from "../../Features/Transactions/addTransaction";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children:[
            {path:'', element: <Dashboard/>},
            {path:'transaction/add-transaction', element: <AddTransaction/> }
        ]
    }
]

export const router = createBrowserRouter(routes)