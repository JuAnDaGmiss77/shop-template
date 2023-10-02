<script lang="ts" setup>
import FooterShop from '../components/FooterShop.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import { useProduct } from '../composables/useProduct'
import { Product } from '../interfaces/Product.interface'
import { ref } from 'vue'

const { getProducts, products, createProduct } = useProduct()

getProducts()

const product = ref<Product>({
    id: new String(products.value.length + 1).toString(),
    amount: 0,
    description: '',
    discount: false,
    image: '',
    name: '',
    pricing: 0
})
//modal 
const openModal = () => {
    const modal = window.document.getElementById("modal");
    if (modal) {
        if (modal.classList.contains("hidden")) {
            modal.classList.remove("hidden");
            modal.classList.add("block");
        }
    }
}

const closeModal = () => {
    const modal = window.document.getElementById("modal")
    if (modal) {
        if (modal.classList.contains("block")) {
            modal.classList.remove("block")
            modal.classList.add("hidden")
        }
    }
}

const cleanForm = () => {
    product.value.amount = 0
    product.value.image = ''
    product.value.pricing = 0
    product.value.description = ''
    product.value.name = ''
    product.value.amount = 0
    product.value.discount = false

}
const onSubmit = () => {
    createProduct(product.value)
    closeModal()
    cleanForm()
    getProducts()
}
</script>

<template>
    <NavigationMenu />
    {{ product }}
    <!-- Main modal -->
    <div id="modal" tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="closeModal()" type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Producto</h3>
                    <form @submit.prevent="onSubmit" class="space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Imagen Url</label>
                            <input v-model="product.image" type="text" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Precio</label>
                            <input v-model="product.pricing" type="number" name="password" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Descripcion</label>
                            <input v-model="product.description" type="text" name="password" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nombre</label>
                            <input v-model="product.name" type="text" name="password" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Cantidad</label>
                            <input v-model="product.amount" type="number" name="password" id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" v-model="product.discount"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">En descuento</label>
                        </div>

                        <button type="submit"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Agregar producto</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <main class="container mx-auto mt-6">

        <div class="grid grid-cols-4">
            <button @click="openModal()" type="button" data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar
                producto</button>

        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Imagen
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre producto
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="product in products" :key="product.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-32 p-4">
                            <img class="h-20 w-full" :src="product.image" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {{ product.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.amount }}
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            $ {{ product.pricing }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
                            <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Editar</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>


    </main>

<FooterShop /></template>