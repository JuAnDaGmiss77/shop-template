<script lang="ts" setup>
import FooterShop from '../components/FooterShop.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import { useProduct } from '../composables/useProduct'

const { getProducts, products } = useProduct()

getProducts()
</script>

<template>
    <NavigationMenu />
    <main class="container mx-auto mt-6">

        <div class="grid grid-cols-4">
            <button type="submit"
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

    <FooterShop />
</template>