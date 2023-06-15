import { makeObservable, observable } from "mobx"

export default class BudgetStore {
    title = "hello from mobx"

    constructor(){
        makeObservable(this, {
            title: observable
        })

    }
}