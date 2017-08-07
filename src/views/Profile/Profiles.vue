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
            name: 'Pang Tutita',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t31.0-8/286596_2003423768658_3262293_o.jpg?oh=755da2aaf15098593323d7ded36e5440&oe=59F125E0',
            position: 'Mommy Developer',
            profileUrl: ''
          },
          {
            name: 'Patarida Pinyopawasuth',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/15542464_10158275921455354_8268265688331370889_n.jpg?oh=2ee75d01c51ae94c7d95e74df858d83e&oe=5A29A32D',
            position: 'Mom of Barry',
            profileUrl: ''
          },
          {
            name: 'Nontachart Kangtong',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/16195952_10208253698288343_2686879462051159450_n.jpg?oh=af6e5500520dc21746846dccb8a74382&oe=5A30B2EC',
            position: 'Senior Backend',
            profileUrl: ''
          },
          {
            name: 'Wisarut Phuvanantanond',
            imgUrl: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/12718193_10153944645815907_5548914306735597574_n.jpg?oh=4242d03aba26cd19486e9f565e9b6208&oe=59F9E58C',
            position: 'Developer of Brazil',
            profileUrl: 'profiler-noomerzx'
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
            profileUrl: ''
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
            position: 'Angular Master',
            profileUrl: 'Design Master'
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
            profileUrl: ''
          }
        ]
      }
    },
    methods: {
      goTo (profile) {
        if (profile) {
          this.$router.push({ name: profile })
        }
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/hexagons_original.css';

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