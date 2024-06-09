
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
});

var app3 = new Vue({
  el: '#app3',
  data: {
      myModal : 'none',
      name: '',
      email: '',
      message: '',
  },

  methods: {
      envoyer(){
          if(this.email == '' || this.name == '' || this.message == ''){
              alert('Please fill all the feilds');
              this.myModal = 'none';
          } else {
              this.myModal = 'block';
          }
          
      },
      fermer() {
          this.myModal = 'none';
      }
  }
}) 

