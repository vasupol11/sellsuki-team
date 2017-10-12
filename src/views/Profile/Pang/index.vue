<template>
  <div>
    <img class="img-profile" src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/1932361_10201458734173686_248470905_n.jpg?oh=5baa17931420a999420d3909ed63335f&oe=5A31E3F5" alt="">
    <h1 class="head">Yutita Wichakul</h1>
    <h2>Pang</h2>
    <section class="VideoBg">
      <video autoplay loop ref="video">
        <source src="/static/pang.mp4" type="video/mp4">
      </video>
    </section>
  </div>
</template>

<script>
  export default {
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
  h2 {
    color: white;
  }
  .VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  .VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
  }
</style>
