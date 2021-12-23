<template>
  <div>
    <Navbar />
    <div class="container">
      <h2 class="title-section mt-5 mb-3">Club <strong>List</strong></h2>
      <div class="row">
        <div class="col-md-6 mb-4" v-for="item in clubList" :key="item.id">
          <CardClub :club="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardClub from "@/components/CardClub.vue";
import axios from "axios";

export default {
  name: "Club",
  components: {
    Navbar,
    CardClub,
  },
  data() {
    return {
      clubList: [],
    };
  },
  methods: {
    setCountry(data) {
      this.clubList = data;
    },
  },

  mounted() {
    axios
      .get(
        "http://api.football-data.org/v2/teams?areas=" + this.$route.params.id,
        {
          headers: {
            "X-Auth-Token": "63eedf32dec14c8e87425ccae8e8e9f3",
          },
        }
      )
      .then((res) => this.setCountry(res.data.teams))
      .catch((err) => console.log(err));
  },
};
</script>