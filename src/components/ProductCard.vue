<template>
    <Notifications group="foo-css" position="bottom left" :speed="500" />
    <div class="card bordered bg-slate-800">
        <figure class="px-8 pt-10">
            <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link
                    class="link link-hover"
                    :to="`/product/${product.id}`"
                    >{{ product.title }}</router-link
                >
            </h2>
            <p>{{ product.price }}</p>
            <div class="justify-end card-actions">
                <button
                    class="btn btn-primary"
                    @click="cartStore.add(product.id)"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { useProductStore } from '../stores/products';

const cartStore = useCartStore();
const props = defineProps({ product: {} });
// defineProps<{ product }>();
</script>
