<template>
  <form
    class="auth-form auth-form-register"
    @submit.prevent="handleSubmit"
  >
    <h2>Sign up</h2>
    <div class="form-group">
      <label for="registerInputName">First Name</label>
      <input type="text" v-model="first_name" class="form-control" id="registerInputName"
             placeholder="Enter your first name">
    </div>
    <div class="form-group">
      <label for="registerInpuLastName">Last Name</label>
      <input type="text" v-model="last_name" class="form-control" id="registerInpuLastName"
             placeholder="Enter your first name">
    </div>
    <div class="form-group">
      <label for="registerInputEmail1">Email address</label>
      <input type="email" v-model="email" class="form-control" id="registerInputEmail1" aria-describedby="emailHelp"
             placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="registerInputPassword1">Password</label>
      <input type="password" v-model="psw" class="form-control" id="registerInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="registerInputPassword2">Confirm Password</label>
      <input type="password" v-model="psw_confirm" class="form-control" id="registerInputPassword2"
             placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" v-model="check_me" class="form-check-input" id="registerCheck1">
      <label class="form-check-label" for="registerCheck1">Check me out</label>
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "RegisterContent",
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      psw: '',
      psw_confirm: '',
      check_me: ''

    }
  },
  methods: {
    async handleSubmit() {

      await axios.post('/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        psw: this.psw,
        psw_confirm: this.psw_confirm,
        check_me: this.check_me
      })
      //   .then(res => {
      //     console.log(res);
      //   })
      // .catch(error => {
      //   console.log(error);
      // })
      // console.log(response);
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  padding: 40px 24px;
  width: 80vw;
  margin: 0 auto;
  background-color: aliceblue;
  border-radius: 8px;
  box-shadow: 0 0 1px #cccccc;

  h2 {
    font-size: 2.5rem;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: orange;
    margin-bottom: 16px;
  }

  .form-group {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
