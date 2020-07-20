<template>
  <div>
    <b-card
      :img-src="tweet.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 40rem;"
      class="mb-2"
    >
      <b-card-text>
        {{tweet.tweet}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
    export default {
        name: "TweetsCard",
      props: ['tweet']
    }
</script>

<style scoped>

</style>
