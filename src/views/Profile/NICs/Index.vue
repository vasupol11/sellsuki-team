<template>
  <div>
    <ul id="hexGrid">
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu">
            <img class="icon" src="http://simpleicon.com/wp-content/uploads/gear-2.svg" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-2">NICs Jittaranan</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn anime1">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-2">NICs Jittaranan</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-logo" href="#">
            <img class="logo" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/14720574_1405665806129675_7756156885488512278_n.jpg?oh=6dbdb2cb376eef3b8bcc03fc3e1d61a6&oe=59FDC8EC" alt="" />
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-menu" href="#">
            <img class="icon" src="https://cdn1.iconfinder.com/data/icons/seo-icons-5/96/Coding-512.png" alt="" />
            <!-- <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p> -->
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
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
  anime1{
    -webkit-animation-name: anime1; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.5s; /* Safari 4.0 - 8.0 */
    animation-name: anime1;
    animation-duration: 4s;
  }
  @keyframes anime1{
    from {
      left:-100%; top:0px;
      z-index: 999;
    }
    to {
      left:0px; top:0px;
      z-index: 999;
    }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes example {
      from {-webkit-transform: rotate3d(0,0,1,360deg) skewY(30deg);
      }
      to {
        -webkit-transform: rotate3d(0,0,1, -60deg) skewY(30deg);
      }
  }

  /* Standard syntax */
  @keyframes example {
      from {transform: rotate3d(0,0,1,360deg) skewY(30deg);
      }
      to {transform: rotate3d(0,0,1, -60deg) skewY(30deg);
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