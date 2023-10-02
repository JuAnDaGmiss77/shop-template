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

        getProductById(idProduct:string): Product {
            const product = this.products.find(object => object.id === idProduct)

            if (product) return product
            throw new Error('Product not exists')
        },

        createProduct(product:Product) {
            this.products.push(product)
        },

        deleteProduct(idProduct:string) {
            this.products = this.products.filter(object => object.id !== idProduct)
        }
    }
})