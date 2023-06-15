import BudgetStore from "./budgetStore";
import { createContext, useContext } from "react";

interface Store {
    bugetStore : BudgetStore
}

export const store : Store = {
    bugetStore: new BudgetStore()
}

export const StoreContext = createContext(store); 

export function useStore() {
    return useContext(StoreContext);
} 