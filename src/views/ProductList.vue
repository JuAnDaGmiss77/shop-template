<script lang="ts" setup>
import FooterShop from '../components/FooterShop.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import { useProduct } from '../composables/useProduct'

const { products, getProducts } = useProduct()

//get products from fake data
getProducts()

</script>

<template>
    <NavigationMenu />

    <!-- products init-->
    <main class="grid grid-cols-4 gap-4 container mx-auto mt-6">


        <div v-for="product in products" :key="product.id"
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" :src="product.image" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${{ product.pricing }}</p>

                <RouterLink :to="{ name: 'ProductDetail', params: { idProduct: product.id }}">
                    <a href="product_detail.html"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Detalle
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </RouterLink>
            </div>
        </div>

    </main>

    <!-- products end-->
    <FooterShop />
</template>