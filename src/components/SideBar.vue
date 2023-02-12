<template>
    <div class="flex">
        <div class="flex flex-col m-3 p-3 duration-300 bg-gray-800 shadow">
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold text-white">
                        Category filters
                    </h2>
                </div>

                <div class="">
                    <ul class="pt-2 pb-4 space-y-1 text-sm">
                        <li
                            class="ml-3"
                            v-for="category in productStore.category_list"
                            :key="category"
                        >
                            <button
                                class="text-neutral-content btn btn-ghost btn-sm rounded-btn"
                                :id="category"
                                @click="productStore.add_filter(category)"
                                :class="{
                                    'bg-slate-400':
                                        productStore.filters.includes(category),
                                }"
                            >
                                {{ category.split(' ')[0] }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
</script>
