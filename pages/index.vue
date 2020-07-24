<template>
  <div class="container" style="margin-top: 60px">

    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>1 of 3</b-col>
        <b-col cols="8">
          <TweetForm v-show="$store.getters.isAuthenticated"/>
          <TweetsCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" v-show="tweets"/>
        </b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import TweetsCard from "~/components/TweetsCard";
  import TweetForm from "~/components/TweetForm";

  export default {

    components: {
      TweetsCard,
      TweetForm

    },

    mounted() {
      this.$store.dispatch('inIt')
      this.$store.dispatch('getTweets')

    },

    computed: {
      tweets() {
        return this.$store.state.tweets
      }
    }

  }
</script>


<style>

</style>
