<template>
<div>
  <div class="Profile">
    <img src="https://image.freepik.com/free-icon/steam-logo-games-website_318-40350.jpg" />
    <span>STEAM infernal-slam <br> <a href="http://steamcommunity.com/profiles/76561198050041577/" target="_blank" class="btn" > Add Friend </a> </span>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.Profile {
  position: absolute;
  margin: auto;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 150px; height: 150px;
  border-radius: 150px;
}
.Profile img {
  border-radius: 150px;
  width: 150px;
  height: 150px;
}
.Profile span {
  position: absolute;
  bottom: -120px;
  display: block;
  width: 150px;
  text-align: center;
  font-family: 'Oswald';
  color: #fff;
  font-size: 25px;
}
.Profile:before {
  content: '';
  position: absolute;
  top: -8px; left: -8px;
  width: 162px; height: 162px;
  border-radius: 162px;
  border: 2px solid #BCBCBC;
}

.Profile:after {
  content: '';
  position: absolute;
  top: -13px; left: -13px;
  width: 172px; height: 172px;
  border-radius: 172px;
  border: 2px solid #FF9900;
}
.btn {
  color: #fff;
  border: 1px solid #fff;
  text-decoration: none;
}
</style>
