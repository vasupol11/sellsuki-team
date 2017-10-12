<template>
  <div>
    <ul id="hexGrid">
      <li class="hex">
        <div v-bind:class="[{ 'anime1-out': flag_out[0] },'anime1']" class="hexIn">
          <a class="hexLink hex-bg-menu">
            <img class="icon" src="http://simpleicon.com/wp-content/uploads/gear-2.svg" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime2">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-2">NICs Jittaranan</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime3">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-2">NICs Jittaranan</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime4">
          <a class="hexLink hex-bg-logo" href="#">
            <img class="logo" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/14720574_1405665806129675_7756156885488512278_n.jpg?oh=6dbdb2cb376eef3b8bcc03fc3e1d61a6&oe=59FDC8EC" alt="" />
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime5">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime6">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn1.iconfinder.com/data/icons/seo-icons-5/96/Coding-512.png" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime7">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-3">NICs Jittaranan</h2>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        flag_out: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ]
      }
    },
    beforeDestroy: async function (d) {
      console.log(d)
      await this.setAllflag(true).then(() => {
        console.log('3333333')
      })
    },
    methods: {
      setAllflag (flag) {
        console.log('222')
        this.$set(this.flag_out, 0, flag)
        this.$set(this.flag_out, 1, flag)
        this.$set(this.flag_out, 2, flag)
        this.$set(this.flag_out, 3, flag)
        this.$set(this.flag_out, 4, flag)
        this.$set(this.flag_out, 5, flag)
        this.$set(this.flag_out, 6, flag)
        this.$set(this.flag_out, 7, flag)
        this.$set(this.flag_out, 8, flag)
        return this.delay(4000)
      },
      delay (time) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, time)
        })
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
}
body {
    /*background: rgb(123, 158, 158);*/
}
#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility:hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after{
  content:'';
  display:block;
  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn{
  position: absolute;
  width:96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin:0 2%;
  overflow: hidden;
  visibility: hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
  -webkit-transform: rotate3d(0,0,0,0deg);
      -ms-transform: rotate3d(0,0,0,0deg);
          transform: rotate3d(0,0,0,0deg);
}

.hex h1, .hex p {
  width: 100%;
  padding: 5%;
  box-sizing:border-box;
  background-color: rgba(0, 128, 128, 0.8);
  font-weight: 300;
  -webkit-transition:  -webkit-transform .2s ease-out, opacity .3s ease-out;
          transition:          transform .2s ease-out, opacity .3s ease-out;
}
.hex h1 {
  bottom: 50%;
  padding-top:50%;
  font-size: 1.5em;
  z-index: 1;
  -webkit-transform:translate3d(0,-100%,0);
      -ms-transform:translate3d(0,-100%,0);
          transform:translate3d(0,-100%,0);
}
.hex h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
  border-bottom: 1px solid #fff;
}
.hex p {
  top: 50%;
  padding-bottom:50%;
  -webkit-transform:translate3d(0,100%,0);
      -ms-transform:translate3d(0,100%,0);
          transform:translate3d(0,100%,0);
}


/*** HOVER EFFECT  **********************************************************************/
.hexLink:hover h1, .hexLink:focus h1,
.hexLink:hover p, .hexLink:focus p{
  -webkit-transform:translate3d(0,0,0);
      -ms-transform:translate3d(0,0,0);
          transform:translate3d(0,0,0);
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:1201px) { /* <- 5-4  hexagons per row */
  #hexGrid{
    padding-bottom: 4.4%
  }
  .hex {
    width: 33%; /* = 100 / 5 */
  }
  .hex:nth-child(5n+1){ /* first hexagon of even rows */
    margin-left:16%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */
  #hexGrid{
    padding-bottom: 5.5%
  }
  .hex {
    width: 33%; /* = 100 / 4 */
  }
  .hex:nth-child(5n+1){ /* first hexagon of even rows */
    margin-left:16.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
  #hexGrid{
    padding-bottom: 7.4%
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+1){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  #hexGrid{
    padding-bottom: 11.2%
  }
  .hex {
    width: 33%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+1){ /* first hexagon of even rows */
    margin-left:16.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }
}

  #hexGrid {
    max-width: 600px;
    transform: translate(-50%, -55%);
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    
  }
  .hexIn{
    position: absolute;
    width:96%;
    padding-bottom: 110.851%; /* =  width / sin(60) */
    margin:0 2%;
    overflow: hidden;
    visibility: hidden;
    outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
    -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
        -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
            transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.5s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 0.5s;
  }
  .anime1{
    -webkit-animation-name: anime1; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime1;
    animation-duration: 4s;
  }
  @keyframes anime1{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:-100%;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime1{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:-100%;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime2{
    -webkit-animation-name: anime2; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime2;
    animation-duration: 4s;
  }
  @keyframes anime2{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-5%; top:-100%;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime2{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; top:-100%;
    }
    50%{
      right:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime3{
    -webkit-animation-name: anime3; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime3;
    animation-duration: 4s;
  }
  @keyframes anime3{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:0px;
      z-index: 999;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
       z-index: 0;
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime3{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:0px;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime5{
    -webkit-animation-name: anime5; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime5;
    animation-duration: 4s;
  }
  @keyframes anime5{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; top:0px;
    }
    50%{
      right:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime5{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; top:0px;
    }
    50%{
      right:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime6{
    -webkit-animation-name: anime6; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime6;
    animation-duration: 4s;
  }
  @keyframes anime6{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; bottom:-100%;
    }
    50%{
      left:0%; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime6{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; bottom:-100%;
    }
    50%{
      left:0%; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime7{
    -webkit-animation-name: anime7; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime7;
    animation-duration: 4s;
  }
  @keyframes anime7{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; bottom:-100%;
    }
    50%{
      right:0px; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime7{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; bottom:-100%;
    }
    50%{
      right:0px; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }


  .anime1-out{
    -webkit-animation-name: anime1-out; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime1-out;
    animation-duration: 4s;
    animation-timing-function: ease;
  }
  @keyframes anime1-out{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
    }
    10%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
      left:-100%; top:-100%;
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime1-out{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
    }
    10%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
      left:-100%; top:-100%;
    }
  }
  .anime2-out{
    -webkit-animation-name: anime2-out; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime2-out;
    animation-duration: 4s;
  }
  @keyframes anime2-out{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
    }
    10%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
      right:-5%; top:-100%;
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime2-out{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
    }
    10%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
      right:-5%; top:-100%;
    }
  }
  .anime3{
    -webkit-animation-name: anime3; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime3;
    animation-duration: 4s;
  }
  @keyframes anime3{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:0px;
      z-index: 999;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
       z-index: 0;
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime3{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; top:0px;
    }
    50%{
      left:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime5{
    -webkit-animation-name: anime5; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime5;
    animation-duration: 4s;
  }
  @keyframes anime5{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; top:0px;
    }
    50%{
      right:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime5{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; top:0px;
    }
    50%{
      right:0px; top:0px;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime6{
    -webkit-animation-name: anime6; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime6;
    animation-duration: 4s;
  }
  @keyframes anime6{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; bottom:-100%;
    }
    50%{
      left:0%; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime6{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      left:-100%; bottom:-100%;
    }
    50%{
      left:0%; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  .anime7{
    -webkit-animation-name: anime7; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: anime7;
    animation-duration: 4s;
  }
  @keyframes anime7{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; bottom:-100%;
    }
    50%{
      right:0px; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes anime7{
    0%{
      transform: rotate3d(0,0,1,2000deg) skewY(30deg);
      right:-100%; bottom:-100%;
    }
    50%{
      right:0px; bottom:-28%;
    }
    100%{
      transform: rotate3d(0,0,1, -60deg) skewY(30deg);
    }
  }


  .hexLink {
    border: 1px solid #2A323B;
  }
  .hex-bg-logo {
    border: none;
  }
  .hex-bg-menu { 
    background: #FF9658;
  }
  .hex-bg-icon {
    background: #FFC900;
  }
  .logo {
    padding: 25px;
  }
  .icon {
    padding: 50px;
  }
  .hex h1 {
    background: black;
    opacity: 0.7;
    color: white;
  }
  .hex p {
    background: black;
    opacity: 0.7;
    color: white;
  }
  .menu {
    margin-top: 20px;
    color: black !important;
    font-weight: bold;
    width: 100%;
  }
  .menu-1 {
    margin-top: 40%;
  }
  .menu-2 {
    margin-top: 35%;
    font-weight: bold;
  }
  .menu-3 {
    margin-top: 35%;
  }
</style>