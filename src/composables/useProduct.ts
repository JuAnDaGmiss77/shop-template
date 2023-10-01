import { ref } from 'vue'
import { useProductStore } from '../store/useProductStore'
import { Product } from '../interfaces/Product.interface'

export const useProduct = () => {
    const products = ref<Product[]>([])
    const productStore = useProductStore()

    const getProducts = (): void => {
        products.value = productStore.getProducts()
    }

    const setFakeProducts = (): void => {
        productStore.setFakeProducts()
    }

    return [
        products,
        getProducts,
        setFakeProducts
    ]
}