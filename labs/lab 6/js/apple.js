Vue.component("coffee-view", {
    props: [ "coffee" ],
    template: "<li> {{ coffee.name }} : ${{ coffee.price }}! </li>"
})

var app = new Vue({
    el: "#app",
    data: {
         purchases: 0,
         message: "Wassup",
         ready: false,
         coffees: [
             {id: 0, price: 5, name: "Coffee"},
             {id: 2, price: 10, name: "Sucks"},
             {id: 4, price: 15, name: "Hard"}
            ]
        },
    methods: {
        buyCoffee: function() {
            this.purchases += 1;
        }
    }
});