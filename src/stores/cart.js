import { defineStore } from 'pinia';
import { CART_STORAGE } from '@/composables/usePersistCart';
import { useProductStore } from './products';

import { useNotification } from '@kyvg/vue3-notification';
const { notify } = useNotification();

export const useCartStore = defineStore({
    id: 'cart',

    state: () => ({
        contents: JSON.parse(localStorage.getItem(CART_STORAGE)) ?? {},
    }),

    getters: {
        count() {
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + this.contents[id].quantity;
            }, 0);
        },

        total() {
            const products = useProductStore();
            const total_cost = Object.keys(this.contents).reduce((acc, id) => {
                return (
                    acc + products.items[id].price * this.contents[id].quantity
                );
            }, 0);
            return Math.round(total_cost * 100) / 100;
        },
        in_cart() {
            const products = useProductStore();
            if (!products.loaded) return [];
            return Object.keys(this.contents).map((productId) => {
                const purchase = this.contents[productId];
                return {
                    id: purchase.productId,
                    quantity: purchase.quantity,
                };
            });
        },

        formattedCart() {
            const products = useProductStore();

            if (!products.loaded) return [];

            return Object.keys(this.contents).map((productId) => {
                const purchase = this.contents[productId];

                return {
                    id: purchase.productId,
                    image: products.items[purchase.productId].image,
                    title: products.items[purchase.productId].title,
                    quantity: purchase.quantity,
                    cost:
                        purchase.quantity *
                        products.items[purchase.productId].price,
                };
            });
        },
    },

    actions: {
        add(productId) {
            if (this.contents[productId]) {
                this.contents[productId].quantity += 1;
            } else {
                this.contents[productId] = {
                    productId,
                    quantity: 1,
                };
            }

            notify({
                type: 'success',
                text: 'The product is added!',
            });
        },
        remove(productId) {
            if (!this.contents[productId]) {
                return;
            }

            this.contents[productId].quantity -= 1;

            if (this.contents[productId].quantity === 0) {
                delete this.contents[productId];
            }

            notify({
                type: 'error',
                text: 'The product is removed!',
            });
        },
        clear(productId) {
            this.contents[productId].quantity = 0;
            delete this.contents[productId];
            notify({
                type: 'error',
                text: 'The product is total removed!',
            });
        },
    },
});
