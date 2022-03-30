<template>
  <form class="auth-form">
    <h2>Sign in</h2>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             placeholder="Enter email address">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "LoginContent"
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
