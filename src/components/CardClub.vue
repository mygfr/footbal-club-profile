<template>
  <div>
    <router-link :to="'/club-detail/' + club.id" class="country-list">
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="club.crestUrl"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="club.name">
              <b-card-text>
                <p class="mb-1">
                  <strong>Short Name</strong>: {{ club.shortName }}
                </p>
                <p class="mb-1"><strong>Address</strong> {{ club.address }}</p>
                <p class="mb-1"><strong>Email</strong>: {{ club.email }}</p>
                <p class="mb-1"><strong>Phone</strong>: {{ club.phone }}</p>
                <p class="mb-1"><strong>Website</strong>: {{ club.website }}</p>
                <p class="mb-1"><strong>Founded</strong>: {{ club.founded }}</p>
                <p class="mb-1"><strong>Stadium</strong>: {{ club.venue }}</p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardClub",
  props: ["club"],
};
</script>