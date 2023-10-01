<script lang="ts" setup>
import FooterShop from '../components/FooterShop.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import { useRoute } from 'vue-router'
import { useProduct } from '../composables/useProduct'

const idProduct = useRoute().params.idProduct as string
const { product, getProductById} = useProduct()

getProductById(idProduct)
</script>

<template>
    <NavigationMenu />
    <main class="grid grid-cols-2 container mx-auto mt-6">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-100 md:rounded-none md:rounded-l-lg"
            :src="product?.image" alt="">
        <div class="flex flex-col p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product?.name }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Descripción: </strong>{{ product?.description }}
            </p>
            <p class="mb-3 font-normal text-gray-700"> <strong>Precio:</strong> ${{ product?.pricing }}</p>
            <p class="mb-3 font-normal text-gray-700"> <strong>Cantidad existente: </strong>{{ product?.amount }}</p>
            <p class="mb-3 font-normal text-gray-700"> <strong>Promoción:</strong> {{ product?.discount ? 'Con descuento' : 'Sin descuento' }}</p>
        </div>

    </main>
    <FooterShop /></template>