<template>
  <div>
    <Navbar />
    <b-jumbotron :header="clubListDetail.name" :lead="clubListDetail.website">
      <img
        :src="clubListDetail.crestUrl"
        :alt="clubListDetail.name"
        class="logo-jumbroton mb-3"
      />
      <p class="mb-1"><strong>Address</strong> {{ clubListDetail.address }}</p>
      <p class="mb-1"><strong>Email</strong>: {{ clubListDetail.email }}</p>
      <p class="mb-1"><strong>Phone</strong>: {{ clubListDetail.phone }}</p>
      <p class="mb-1"><strong>Website</strong>: {{ clubListDetail.website }}</p>
      <p class="mb-1"><strong>Founded</strong>: {{ clubListDetail.founded }}</p>
      <p class="mb-1"><strong>Stadium</strong>: {{ clubListDetail.venue }}</p>
    </b-jumbotron>
    <h2 class="title-section mt-5 mb-3 container">
      Active <strong>Competitions</strong>
    </h2>
    <div class="container">
      <ul class="list-unstyled">
        <b-media tag="li" v-for="competitive in clubListDetail.activeCompetitions" :key="competitive.id" class="mb-4">
          <template #aside>
            <img
              src="../assets/images/competitive.png"
              alt="competitions"
              class="logo-media mb-3"
            />
          </template>
          <h5 class="mt-0 mb-1">{{competitive.name}}</h5>
          <p class="mb-0">
            {{competitive.code}}
          </p>
        </b-media>
      </ul>
    </div>

    <h2 class="title-section mt-5 mb-3 container">
      Player <strong>Members</strong>
    </h2>
    <div class="container">
      <ul class="list-unstyled">
          <router-link v-for="player in clubListDetail.squad" :key="player.id" :to="'/player/' + player.id" class="country-list">        
            <CardPlayer :player="player" />
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardPlayer from "@/components/CardPlayer.vue";
import axios from "axios";

export default {
  name: "ClubDetail",
  components: {
    Navbar,
    CardPlayer
  },
  data() {
    return {
      clubListDetail: [],
    };
  },
  methods: {
    setCountry(data) {
      this.clubListDetail = data;
    },
  },

  mounted() {
    axios
      .get("http://api.football-data.org/v2/teams/" + this.$route.params.id, {
        headers: {
          "X-Auth-Token": "63eedf32dec14c8e87425ccae8e8e9f3",
        },
      })
      .then((res) => this.setCountry(res.data))
      .catch((err) => console.log(err));
  },
};
</script>