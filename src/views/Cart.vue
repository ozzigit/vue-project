<template>
    <div class="p-5 max-w-3xl mx-auto">
        <div v-if="!productStore.loaded" class="space-y-4">
            <CartCardSkeleton v-for="n in 15" :key="n" />
        </div>
        <div v-else-if="!formattedCart.length">
            <h1 class="text-xl">Cart is empty.</h1>
        </div>
        <div v-else class="space-y-4">
            <CartCard
                v-for="(cartProduct, index) in formattedCart"
                :key="index"
                :cartProduct="cartProduct"
            />
            <div class="text-right text-2xl md:text-3xl">
                Total: {{ cartStore.total }}
            </div>
        </div>
        <div class="p-5 flex space-x-2 justify-end">
            <button
                class="inline-block px-3 py-2.5 bg-green-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                @click="buy_click"
            >
                Buy now
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import CartCard from '../components/CartCard.vue';
import CartCardSkeleton from '../components/CartCardSkeleton.vue';
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/products';

const cartStore = useCartStore();
const productStore = useProductStore();

const formattedCart = computed(() => cartStore.formattedCart);
function buy_click() {
    console.log(cartStore.in_cart);
    window.alert(JSON.stringify(cartStore.in_cart))
}
</script>
