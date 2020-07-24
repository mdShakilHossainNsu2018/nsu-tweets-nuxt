<template>

  <div class="register_page">
    <b-card>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1" label="Your First Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.first_name"
            required
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.last_name"
            required
            placeholder="Enter last name"
          ></b-form-input>
        </b-form-group>


        <b-form-group
          id="input-group-3"
          label="Email address:"
          label-for="input-3"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Your Username:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.username"
            required
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Password:" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Confirm Password:" label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="form.confirm_password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <!--      <b-form-group id="input-group-4">-->
        <!--        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">-->
        <!--          <b-form-checkbox value="me">Check me out</b-form-checkbox>-->
        <!--          <b-form-checkbox value="that">Check that out</b-form-checkbox>-->
        <!--        </b-form-checkbox-group>-->
        <!--      </b-form-group>-->

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

    </b-card>

    <b-card class="mt-3" v-if="errors.length" header="Errors occurs:">
      <ul v-for="error in errors" class="alert-danger"><li>{{error}}</li></ul>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          email: '',
          username: '',
          password: null,
          confirm_password: null,
        },

        errors: [],

        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.matchPass();
        if (this.matchPass()){

          const data = {first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            username:this.form.username,
            password: this.form.password}

          this.$store.dispatch('registerUser', data)
        }
        this.onReset(evt);
      },
      matchPass(){

        if (this.form.password !== this.form.confirm_password){
          this.errors.push('Password mismatch...')
          return false;

        }
        return true;

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.first_name = ''
          this.form.last_name = ''
          this.form.email = ''
          this.form.username = ''
          this.form.password = null
          this.form.confirm_password = null
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

<style scoped>
  .register_page{
    margin-bottom: 80px;
  }
</style>
