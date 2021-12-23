<template>
  <div>
    <Navbar />
    <div class="container">
      <h2 class="title-section mt-5 mb-3">Player <strong>Detail</strong></h2>
      <div class="row">
        <div class="col-md-12">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body :title="playerList.name">
                  <b-card-text>
                    <p class="mb-1">
                      <strong>First Name</strong>: {{ playerList.firstName }}
                    </p>
                    <p class="mb-1">
                      <strong>Last Name</strong>: {{ playerList.lastName }}
                    </p>
                    <p class="mb-1"><strong>Date Of Birth</strong>: {{ playerList.dateOfBirth }}</p>
                    <p class="mb-1"><strong>Country Of Birth</strong>: {{ playerList.countryOfBirth }}</p>
                    <p class="mb-1">
                      <strong>Nationality</strong>: {{ playerList.nationality }}
                    </p>
                    <p class="mb-1">
                      <strong>Position</strong>: {{ playerList.position }}
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Player",
  components: {
    Navbar,
  },
  data() {
    return {
      playerList: [],
    };
  },
  methods: {
    setPlayerList(data) {
      this.playerList = data;
    },
  },

  mounted() {
    axios
      .get("http://api.football-data.org/v2/players/" + this.$route.params.id, {
        headers: {
          "X-Auth-Token": "63eedf32dec14c8e87425ccae8e8e9f3",
        },
      })
      .then((res) => this.setPlayerList(res.data))
      .catch((err) => console.log(err));
  },
};
</script>