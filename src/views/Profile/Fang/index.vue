<template>
  <div>
    <img class="img-profile" @click="changeUmu" :src="url" :alt="alt">
    <h1 class="head">Jinnawat ( Khawfang ) Lochaiyakul</h1>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        url: 'https://scontent.fbkk16-1.fna.fbcdn.net/v/t1.0-9/18034111_1295727907159899_3024737257649542341_n.jpg?oh=a3e47060a7c3e867e4b39782668f30f9&oe=59ED2410',
        text: 'Developer',
        alt: 'try click me'
      }
    },
    methods: {
      changeUmu () {
        if (this.text === 'Umu is the best waifu.') {
          this.url = 'https://scontent.fbkk16-1.fna.fbcdn.net/v/t1.0-9/18034111_1295727907159899_3024737257649542341_n.jpg?oh=a3e47060a7c3e867e4b39782668f30f9&oe=59ED2410'
          this.text = 'Developer'
          this.alt = 'try click me'
        } else {
          this.url = 'https://i.ytimg.com/vi/iqQCInmPl-I/hqdefault.jpg'
          this.text = 'Umu is the best waifu.'
          this.alt = 'Click here umu'
        }
      }
    }
  }
</script>

<style scoped>
  .img-profile {
    margin-top: 50px;
    border-radius: 50%;
    max-width: 300px;
  }
  h1.head {
    margin-top: 30px;
    color: white;
  }
  h3 {
    color: white;
  }
</style>