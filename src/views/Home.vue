<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <h2 class="title-section">Choose <strong>Country</strong></h2>
      <div class="row mt-3">
        <div class="col-md-4 mb-4" v-for="item in countryList" :key="item.id">
          <CardCountry :country="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardCountry from "@/components/CardCountry.vue"
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardCountry
  },
  data() {
    return {
      countryList: [],
    };
  },
  methods: {
    setCountry(data) {
      this.countryList = data;
    },
  },

  mounted() {
    axios
      .get("http://api.football-data.org/v2/areas/", {
        headers: {
          "X-Auth-Token": "63eedf32dec14c8e87425ccae8e8e9f3",
        },
      })
      .then((res) => this.setCountry(res.data.areas))
      .catch((err) => console.log(err));
  },
};
</script>
