var app = new Vue({
    el: '#app',
    data: {
      images: [
        'css.png',
        'html.png',
        'js.png',
        'vue.png'
      ],
      thisIndex: 0
    },
    methods: {
      nextImg() {
       this.thisIndex = (this.thisIndex + 1) % this.images.length;
      
      },
      prevImg() {
        this.thisIndex = (this.thisIndex - 1 + this.images.length) % this.images.length;
    }
    
    } 
  });
var app2 = new Vue({
  el: '#app2',
  data: {
    modal: 'none',
  },
  methods: {
    fermer(){
      this.modal = 'none';
    },
    ouvre(){
      this.modal = 'flex';
    }
  }
})