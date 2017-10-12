<template>
  <div class="container wan-container">
    <div class="clouds_one"></div>
    <div class="row">
      <div class="col-lg-12 back">
        <router-link :to="{ name: 'profiles' }"><i class="fa fa-chevron-circle-left"></i></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="img-profile">
          <img src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/18486145_1785286691497936_1517495460767419062_n.jpg?oh=de0e197c9114c4c30a6363092ccd41df&oe=5A2833A4" alt="">
        </div>
      </div>
    </div>
    <h2 class="name">Wan Tip</h2>
    <div class="position">Developer</div>
    <div class="address">
      <i class="fa fa-hand-peace-o"></i><span> Hello It's Me</span>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  @-webkit-keyframes cloud_one {
    0% {
      top: 0;
      left: 0;
    }
    50% {
      top: -15%;
    }
    100% {
      left: -200%;
      top: 0;
    }
  }
  .wan-container {
    color: #51565f;
    background: url('https://images.unsplash.com/photo-1483354483454-4cd359948304?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=');
    background-size: cover;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .img-profile {
    max-width: 300px;
    width: 20vmax;
    margin: 2vmax auto 1vmax;
  }
  .img-profile img {
    border-radius: 50%;
    width: 100%;
    opacity: 0.75;
  }
  .name {
    font-size: 2.5vmax;
    margin: 1vmax 0;
    margin-bottom: 0;
  }
  .position {
    font-size: 1.5vmax;
  }
  .address {
    font-size: 1.5vmax;
    margin: 1vmax 0;
    font-weight: bold;
  }
  .back {
    margin: 1vmax 1px;
    text-align: left;
  }
  .back i {
    opacity: 0.5;
    color: #51565f;
    font-size: 5vmax;
    transition: all 0.1s ease-in-out;
  }
  .back i:hover {
    opacity: 1;
    font-size: 6vmax;
  }
  .back a {
    width: 6vmax;
    height: 6vmax;
    display: inline-block;
    text-align: center;
  }
  html, body {
  margin: 0;
  height: 100%
}

.clouds_one {
  opacity: 0.4;
  background: url("http://www.pngall.com/wp-content/uploads/2016/03/Cloud-PNG-9.png");
  background-repeat: repeat-x;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_one 200s linear infinite;
  -moz-animation: cloud_one 200s linear infinite;
  -o-animation: cloud_one 200s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0)
}
</style>