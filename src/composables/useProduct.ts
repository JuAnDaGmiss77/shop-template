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

    const getProductById = ( idProduct:string ): Product => {
        product.value = productStore.getProductById(idProduct)
        return product.value
    }

    const createProduct = ( product:Product ): void => {
        productStore.createProduct(product)
    }

    const deleteProduct = ( idProduct:string ): void => {
        productStore.deleteProduct(idProduct)
    }

    const editProduct = ( updatedProduct:Product): void => {
        productStore.editProduct(updatedProduct)
    }

    return {
        products,
        getProducts,
        setFakeProducts,
        getProductById,
        product,
        createProduct,
        deleteProduct,
        editProduct,
    }
}