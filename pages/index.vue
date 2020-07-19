<template>
  <div class="container">
      <h1>Hello nsu</h1>
  </div>
</template>

<script>
export default {

  data: function (){
    return {
      tweets: {}
    }
  },

  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/tweets/').then(res => {console.log(res.data)}).catch(
      err => console.log(err)
    )
  }

}
</script>


<style>

</style>
