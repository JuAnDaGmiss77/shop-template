import { defineStore } from "pinia"
import { Product } from "../interfaces/Product.interface"
import { productsFakeData } from "./products.fake"
export const useProductStore = defineStore('Product', {
    state: () => {
        return {
            products: {} as Product[],
        }
    },

    persist: {
        storage: localStorage,
        paths: ['products']
    },

    actions: {

        setFakeProducts() {
            if ( this.products.length === 0 ) this.products = productsFakeData
            else return
        },
        getProducts(): Product[] {
            return this.products
        }
    }
})