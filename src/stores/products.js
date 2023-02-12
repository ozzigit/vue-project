import { defineStore } from 'pinia';

const fakeStoreUrl = 'https://fakestoreapi.com';

export const useProductStore = defineStore({
    id: 'products',

    state: () => ({
        items: {},
        ids: [],
        filters: [],
    }),

    getters: {
        list() {
            // return this.ids.map((i) => this.items[i]);
            if (this.filters.length > 0) {
                let arr = this.ids.map((i) => this.items[i]);
                return arr.filter((el) => this.filters.includes(el.category));
            } else {
                return this.ids.map((i) => this.items[i]);
            }
        },

        loaded() {
            return this.ids.length > 0;
        },
        category_list() {
            // this.return [...new Set(data.map(item => item.group))]
            return new Set(this.ids.map((i) => this.items[i].category));
        },
    },

    actions: {
        async fetchAll() {
            if (this.loaded) return;

            const res = await fetch(`${fakeStoreUrl}/products`);
            const data = await res.json();
            this.ids = data.map((product) => {
                this.items[product.id] = product;
                return product.id;
            });
        },

        add_filter(filter) {
            if (this.filters.includes(filter)) {
                this.filters.pop(filter);
            } else {
                this.filters.push(filter);
            }
        },
        clear_filter() {
            this.filters = [];
        },
    },
});
