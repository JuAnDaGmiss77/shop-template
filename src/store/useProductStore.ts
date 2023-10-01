import { defineStore } from "pinia"
import { Product } from "../interfaces/Product.interface"
import { productsFakeData } from "./products.fake"
export const useProductStore = defineStore('Product', {
    state: () => {
        return {
            products: [] as Product[],
            product: {} as Product,
        }
    },

    persist: {
        storage: localStorage,
        paths: ['products']
    },

    actions: {

        setFakeProducts() {
            if ( this.products.length === 0 ) {
                console.log('not exists products')
                this.products = productsFakeData
            }
            else return
        },

        getProducts(): Product[] {
            return this.products
        },

        getProductById(idProduct:string): Product | string {
            const product = this.products.find(objeto => objeto.id === idProduct)

            if (product) return product

            return 'No existe ese producto'
        }
    }
})