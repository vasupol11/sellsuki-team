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
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-1">Team Member</h2>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink hex-bg-icon" href="#">
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
          <a class="hexLink hex-bg-icon" href="#">
            <h2 class="menu menu-3">Stories</h2>
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
    margin-top: 50%;
  }
  .menu-3 {
    margin-top: 50%;
  }
</style>