<template>
  <div>
    <ul id="hexGrid">
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="http://simpleicon.com/wp-content/uploads/gear-2.svg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex" @click="goTo('profiles')">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon">
            <h2 class="menu menu-1">Team Member</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon" href="http://www.sellsuki.co.th/">
            <h2 class="menu menu-2">Services</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-logo" href="#">
            <img class="logo" src="https://lh3.googleusercontent.com/xKMtFwywgLtzeN97w5swaA-o0s5S2OBVCaeuS22cGr96OMuYvCvkzBEDbuNCo5c1s2Qc=w300" alt="" />
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn1.iconfinder.com/data/icons/seo-icons-5/96/Coding-512.png" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon" href="https://stories.sellsuki.co.th/">
            <h2 class="menu menu-3">Stories</h2>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (routeName) {
        this.$router.push({ name: routeName })
      }
    }
  }
</script>

<style scoped>
  /*@import '../../assets/css/hexagons.css';*/
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
  overflow: hidden;
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
  .hexLink {
    border: 1px solid #2A323B;
  }
  .hex-bg-logo {
    border: none;
  }
  .hex-bg-menu { 
    background: #BBB7AE;
    opacity: 0.8;
  }
  .hex-bg-icon {
    background: #FFFF00;
  }
  .logo {
    padding: 25px;
  }
  .icon {
    padding: 50px;
  }
  .hex h1 {
    background:rgba(0, 0, 0, 0.8);
    color: white;
  }
  .hex p {
    background:rgba(0, 0, 0, 0.8);
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
    margin-top: 50%;
  }
  .menu-3 {
    margin-top: 50%;
  }
  .hex:hover {
    cursor: pointer;
  }
  .hex-bg-icon:hover {
    opacity: 0.9;
  }
</style>