import { ref } from 'vue'
import { useProductStore } from '../store/useProductStore'
import { Product } from '../interfaces/Product.interface'

export const useProduct = () => {
    const products = ref<Product[]>([])
    const productStore = useProductStore()
    const product = ref<Product>()

    const getProducts = (): void => {
        products.value = productStore.getProducts()
    }

    const setFakeProducts = (): void => {
        productStore.setFakeProducts()
    }

    const getProductById = ( idProduct:string ): void => {
        product.value = productStore.getProductById(idProduct)
    }

    return {
        products,
        getProducts,
        setFakeProducts,
        getProductById,
        product
    }
}