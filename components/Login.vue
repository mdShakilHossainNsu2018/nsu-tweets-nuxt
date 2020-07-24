<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
        description="We'll never share your username with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
      <b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },

        errors: [],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.dispatch('userLogin', {username: this.form.username, password: this.form.password})
        this.onReset(evt);
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        this.errors = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
