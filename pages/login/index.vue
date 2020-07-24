<template>
    <div class="login_page" >
      <Login/>
    </div>
</template>

<script>
  import Login from "~/components/Login";
    export default {
        name: "index",
      components: {Login}
    }
</script>

<style scoped>

  .login_page{
    margin-top: 60px;
  }

</style>
