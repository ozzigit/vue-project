<template>
    <div class="card md:card-side bordered bg-slate-800">
        <figure class="p-8">
            <img
                :src="cartProduct.image"
                alt="Card Image"
                class="object-contain w-full h-48"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link
                    class="link link-hover"
                    :to="`/product/${cartProduct.id}`"
                    >{{ cartProduct.title }}</router-link
                >
            </h2>
            <p>{{ cartProduct.cost }}</p>
            <div class="card-actions">
                <div class="btn-group">
                    <button
                        class="btn btn-primary"
                        @click="cartStore.remove(cartProduct.id)"
                    >
                        -
                    </button>
                    <button class="btn btn-ghost no-animation">
                        {{ cartProduct.quantity }}
                    </button>
                    <button
                        class="btn btn-primary"
                        @click="cartStore.add(cartProduct.id)"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <button
            type="button"
            class="btn-close"
            @click="cartStore.clear(cartProduct.id)"
        >
            <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart';
// import { toCurrency } from '../shared/utils';

const cartStore = useCartStore();

defineProps<{
    cartProduct;
}>();
</script>
<style>
.btn-close {
    margin: 10px;
}
</style>
