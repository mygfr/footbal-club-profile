<template>
  <div>
    <router-link :to="'/club/' + country.id" class="country-list">
      <b-card img-alt="Card image" img-top>
        <b-card-text>
          {{ country.name }}
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardCountry",
  props: ["country"],
};
</script>