
const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Questo è il primo esercizio con Vue JS!',
      randomImage: 'https://picsum.photo/400/200'
    }
  }
}).mount('#app')
