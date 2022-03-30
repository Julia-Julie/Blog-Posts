<template>
  <form class="auth-form auth-form-register">
    <h2>Sign up</h2>
    <div class="form-group">
      <label for="registerInputEmail1">Email address</label>
      <input type="email" class="form-control" id="registerInputEmail1" aria-describedby="emailHelp"
             placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="registerInputPassword1">Password</label>
      <input type="password" class="form-control" id="registerInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="registerInputPassword2">Confirm Password</label>
      <input type="password" class="form-control" id="registerInputPassword2" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="registerCheck1">
      <label class="form-check-label" for="registerCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "RegisterContent"
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
