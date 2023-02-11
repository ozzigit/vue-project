import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('products', () => {
    const products = ref([]);

    function getProducts() {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                posts.value = data;
                console.log('Data is fetched.');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // Runs the very first time the store is used. i.e., when the store is initialized.
    onMounted(getProducts);

    return { products, getProducts };
});
