
const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Questo è il primo esercizio con Vue JS!',
      randomImage: 'https://picsum.photos/200'
    }
  },
  methods:{
    generateImage(){
        newImage = this.randomImage

    }

  }
}).mount('#app')
