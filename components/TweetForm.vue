<template>
    <div>
      <b-card>
        <b-form-textarea
          id="textarea"
          v-model="tweet"
          placeholder="Enter Tweet Here"
          rows="3"
          max-rows="6"
        ></b-form-textarea>

        <b-form-file  v-model="image" class="mt-3" plain></b-form-file>

<!--        <input type="file" id="file" ref="file" class="input is-rounded" v-on:change="handleFileUpload"/>-->

        <b-button @click="onSubmit" variant="primary" class="p-btn" block>Post</b-button>


      </b-card>
    </div>
</template>

<script>
    export default {
        name: "TweetForm",
      data(){
          return { tweet: '', image: [] }
      },

      methods: {
          onSubmit() {

            let data = new FormData(); // creates a new FormData object
            data.append('image', this.image); // add your file to form data
            data.append('tweet', this.tweet)

            this.$store.dispatch('postTweet', data)
        },
        // handleFileUpload(){
        //   this.image = this.$refs.file.files[0];
        //
        // }
      }

    }
</script>

<style scoped>

  .p-btn{
    margin-top: 10px;
  }

</style>
