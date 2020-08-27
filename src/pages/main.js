import Home from './home/index.js'

let vue = new Vue({
    el: '#app',
    data: function() {
      return { visible: false }
    },
    components: {
        Home
    }
})

console.log(Home);