Vue.component("book-view", {
    props: [ "book" ],
    template: `<div style="border: solid 1px black; width: 200px; height: 250px; text-align: center;"> 
                <h2> {{ book.title }} </h2>
                <h5> by: {{ book.author }} </h5>
                <h1 style="font-size: 300%"> {{ book.cover }} </h1> 
              </div>`
})

var app = new Vue({
    el: "#app",
    data: {
        books: [
            {id: 1, title: "Harry Potter", author: "J. K. Roweling", cover: "🧙", show: true},
            {id: 2, title: "Percy Jackson", author: "Rick Riordan", cover: "🧜‍♀️", show: false}
        ] 
    },
    methods: {
        dissapear: function() {
            if(this.books[1].show == false) {
                this.books[1].show = true;
                show.innerHTML = "Hide Other Selections";
            }
            else {
                this.books[1].show = false;
                show.innerHTML = "Show Other Selections";
            }
        }
    }
})