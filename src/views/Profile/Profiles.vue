<template>
  <div class="container">
    <h1 class="title">- We're SELLSUKI -</h1>
    <ul id="hexGrid">
      <li class="hex" v-for="member in team">
        <div class="hexIn">
          <a class="hexLink" @click="goTo(member.profileUrl)">
            <img :src="member.imgUrl" alt="" />
            <h1>{{member.name}}</h1>
            <p>{{member.position}}</p>
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
        team: [
          {
            name: 'Lertad Supadhiloke',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/12003404_10156276191155556_1712314098878028249_n.jpg?oh=a35673c35749bee7e94031133024e501&oe=59F5BC88',
            position: 'CEO',
            profileUrl: ''
          },
          {
            name: 'Nati Namvong',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/12540620_10208602238000550_4755901477136305608_n.jpg?oh=135905c999db4ca88ffbbec32ce745e8&oe=59F8718D',
            position: 'Father of all Institutes',
            profileUrl: ''
          },
          {
            name: 'Thanutchai Saelim',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/14991940_10209506287392323_5351678341231226216_n.jpg?oh=f9952b1dc8d3227aa035f1a64d1e3129&oe=59F42CF3',
            position: 'God of Backend',
            profileUrl: ''
          },
          {
            name: 'Chaiwat Rudeeyensakul',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/10931114_10203497856107154_3094307673087022091_n.jpg?oh=1b8fc15a7c1bfc76cc613e91d981f1ad&oe=59EBFBF7',
            position: 'Frontend Ninja',
            profileUrl: ''
          },
          {
            name: 'Somwit Suteepongsopon',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/10402642_673323026036152_7493491511691321285_n.jpg?oh=1e83d7062872e35a759933ec810a8ada&oe=5A2824F6',
            position: 'The Artist',
            profileUrl: ''
          },
          {
            name: 'Naris Jarinsee',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t31.0-8/289781_2392073324302_3845573_o.jpg?oh=083040e970a13e6eb585ea18a951454d&oe=59F7C61C',
            position: 'Daddy Developer',
            profileUrl: ''
          },
          {
            name: 'Pang Yutita',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t31.0-8/286596_2003423768658_3262293_o.jpg?oh=755da2aaf15098593323d7ded36e5440&oe=59F125E0',
            position: 'Mommy Developer',
            profileUrl: 'profile-pang'
          },
          {
            name: 'Patarida Pinyopawasuth',
            imgUrl: 'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-0/p240x240/181716_10150425954805354_6319555_n.jpg?oh=54478cd8e7877198ffc13e90db143892&oe=5A38CC8C',
            position: 'Mom of Barry',
            profileUrl: ''
          },
          {
            name: 'Nontachart Kangtong',
            imgUrl: 'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/18153_1208176052763_6680009_n.jpg?oh=9c13f48531eb593a29e2320ed7fbe9b7&oe=59EF09D4',
            position: 'Senior Backend',
            profileUrl: ''
          },
          {
            name: 'Wisarut Phuvanantanond',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/12718193_10153944645815907_5548914306735597574_n.jpg?oh=4242d03aba26cd19486e9f565e9b6208&oe=59F9E58C',
            position: 'Developer of Brazil',
            profileUrl: 'profile-noomerzx'
          },
          {
            name: 'Vittaya Krahan',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/296585_3093679680312_1948871182_n.jpg?oh=fbeb307a5b24c8948b1a29c6248a6390&oe=59ECACA6',
            position: 'CMS Developer',
            profileUrl: ''
          },
          {
            name: 'Nonthkron Eiamsa-ard',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/13335986_1221400137878183_4025488905783341116_n.jpg?oh=6e87bf84741e5d5bc4db7ca47e6317fd&oe=59F24E29',
            position: 'Proplayer of Magento',
            profileUrl: ''
          },
          {
            name: 'Stoey',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/11904094_1080682525282914_5424044981563844211_n.jpg?oh=e9330787828f6d46e2251bc528e13d2e&oe=5A35911A',
            position: 'Manual Tester',
            profileUrl: ''
          },
          {
            name: 'Wantip',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t34.0-12/20645688_1887791241247480_868356342_n.jpg?oh=af8b9b6b9f886ba946c77b49546dd1a3&oe=598AD30C',
            position: 'Angular Master',
            profileUrl: ''
          },
          {
            name: 'Penkittika Sawangsilp',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/15590431_1614430068583834_8431098437738116711_n.jpg?oh=342c9a8b893987a94391fa16e35c451b&oe=59F16DB5',
            position: 'System Analysis',
            profileUrl: ''
          },
          {
            name: 'Wasin Jamroensap',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/983676_742967105747893_3057455589677211153_n.jpg?oh=81ea90657ac67ccf33d9860d285c8b7d&oe=5A360FDE',
            position: 'Girl Hunter',
            profileUrl: 'profile-white'
          },
          {
            name: 'Nattatorn Yucharoen',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-1/14639674_10154133851662098_5075742419819360043_n.jpg?oh=0c76d1920f5123d835cbfa6d13d5bd63&oe=59F966C9',
            position: 'React Master',
            profileUrl: ''
          },
          {
            name: 'Hoh Paranun',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/15781645_10206255096056254_8441367728746517248_n.jpg?oh=1bef1d7f7d800b4176c8a22f57acb45b&oe=59FA93E1',
            position: 'Tony Hoh Tester',
            profileUrl: ''
          },
          {
            name: 'Sarin Amonratmongkol',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/165677_144139162306129_4192905_n.jpg?oh=23cd8173ad8dbcd38a0c7086d571571c&oe=59EECEE0',
            position: '"บอย"',
            profileUrl: ''
          },
          {
            name: 'Pongsatorn Nitithammawoot',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/21981_4353095621442_291085582_n.jpg?oh=5bf16980148c9cc35af46b577e6549e1&oe=5A335AAF',
            position: 'The Dev',
            profileUrl: ''
          },
          {
            name: 'Nic Jittaranan',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/11332_1206356816060576_7133234168861675503_n.jpg?oh=98036b35a157a04cc6a18b675880cf7d&oe=59FAD475',
            position: 'Nicka',
            profileUrl: 'profile-nic'
          },
          {
            name: 'Tak Kamonpob',
            imgUrl: 'https://scontent.fbkk16-1.fna.fbcdn.net/v/t1.0-9/10418431_10203020333896940_6505088533110123047_n.jpg?oh=62fb4035ed2215781452f9c8208bda30&oe=59FA5605',
            position: 'Juke Master',
            profileUrl: 'profile-tak'
          }
        ]
      }
    },
    methods: {
      goTo (profile) {
        if (profile) {
          console.log(profile)
          this.$router.push({ name: profile })
        }
      }
    }
  }
</script>

<style scoped>
  /*@import '../../assets/css/hexagons_original.css';*/
li.hex:nth-child(12) .henIn .hexLink img {
  box-shadow: 0px 0px 5px #fff;
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
/*li.hex{
  z-index: -2;
}*/
.hex {
  position: relative;
  visibility:hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex:hover {
  cursor: pointer;
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
    width: 20%; /* = 100 / 5 */
  }
  .hex:nth-child(9n+6){ /* first hexagon of even rows */
    margin-left:10%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */
  #hexGrid{
    padding-bottom: 5.5%
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5){ /* first hexagon of even rows */
    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
  #hexGrid{
    padding-bottom: 7.4%
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  #hexGrid{
    padding-bottom: 11.2%
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n+3){ /* first hexagon of even rows */
    margin-left:25%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }
}


  .title {
    margin: 50px;
    color: white;
    font-weight: bold !important;
  }

  a {
    color: white !important;
  }

  .hex h1 {
    background:rgba(0, 0, 0, 0.8);
    color: white;
    font-weight: bold !important;
  }
  .hex p {
    background:rgba(0, 0, 0, 0.8);
    font-size: 18px;
    color: white;
  }
</style>
