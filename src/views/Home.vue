
<template>
    <div class="p-5 max-w-7xl mx-auto">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ProductCardSkeleton
                v-show="!productStore.loaded"
                v-for="n in 15"
                :key="n"
            />
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductCardSkeleton from '@/components/ProductCardSkeleton.vue';
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();

const products = computed(() => productStore.list);
</script>