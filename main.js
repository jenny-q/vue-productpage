Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image" :alt="alt">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                
                <product-details :details="details"></product-details>

                <div v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        class="color-box"
                        :style="{ backgroundColor: variant.variantColor }" 
                        @mouseover="updateProduct(index)" >
                </div>
                <button v-on:click="addToCart"  :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
            
        </div>`,
        data() {
            return {
                brand: 'jPlants',
                product: 'Ficus Elastica',
                selectedVariant: 0,
                alt: 'Ficus Elastica',
                details: ["6 inch pot", "Multiple pot colors available"],
                variants: [
                    {
                        variantId: 101,
                        variantName: 'Ficus Elastica',
                        variantColor: "#005f3a" ,
                        variantImage: './img/pexels-photo-1048035.jpg',
                        variantQuantity: 11
                    },
                    {
                        variantId: 102,
                        variantName: "Ficus Tineke",
                        variantColor: "#90EE90" ,
                        variantImage: './img/tineke.jpg',
                        variantQuantity: 0
                    },
                    {
                        variantId: 103,
                        variantName: "Ficus Ruby",
                        variantColor: "#e0115f",
                        variantImage: './img/ruby.jpg',
                        variantQuantity: 8
                    }
                ],
                cart: 0,
            }
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(index) {
                this.selectedVariant = index
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity
            },
            shipping() {
                if(this.premium) {
                    return "Free Shipping"
                }
                return 2.99
            }
        }
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})