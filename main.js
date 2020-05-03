var app = new Vue({
    el: '#app',
    data: {
        product: 'Ficus Elastica',
        image: './img/pexels-photo-1048035.jpg',
        alt: 'Ficus Elastica',
        inventory: 8,
        details: ["6 inch pot", "Multiple pot colors available"],
        variants: [
            {
                variantId: 101,
                variantColor: "Ficus Elastica" ,
                variantImage: './img/pexels-photo-1048035.jpg'
            },
            {
                variantId: 102,
                variantColor: "Ficus Tineke",
                variantImage: './img/tineke.jpg'
            },
            {
                variantId: 103,
                variantColor: "Ficus Ruby",
                variantImage: './img/ruby.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})