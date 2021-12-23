<template>
  <div>
    <b-media tag="li" class="mb-4">
      <template #aside>
        <img
          src="../assets/images/soccer-player.png"
          alt="competitions"
          class="logo-media mb-3"
        />
      </template>
      <h5 class="mt-0 mb-1">{{ player.name }}</h5>
      <p class="mb-0"><b>Position</b>: {{ player.position }}</p>
      <p class="mb-0"><b>Date Of Birth</b>: {{ player.dateOfBirth }}</p>
      <p class="mb-0"><b>Nationality</b>: {{ player.nationality }}</p>
    </b-media>
  </div>
</template>

<script>
export default {
  name: "CardPlayer",
  props: ["player"],
};
</script>