<template>
  <b-container>
    <h1>Signup Example</h1>
    <form class="box">
      <h1>Signup</h1>
      <p class="text-muted">Please input your information for registions</p>
      <div class="top-border">
        <h3>Name:</h3>
        <input type="text" name="" placeholder="First Name" />
        <input type="text" name="" placeholder="Last Name" />
        <input type="password" name="" placeholder="Phone Number" />
      </div>
      <div class="bottom-border">
        <h3>Login information:</h3>
        <input type="password" name="" placeholder="Email" />
        <input type="password" name="" placeholder="Password" />
        <input type="password" name="" placeholder="Confirm Password" />
      </div>

      <input type="submit" name="" value="Sing Up" href="#" />
    </form>
  </b-container>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style scoped>
/* --login-container-background: #e5e5e5; */
.bottom-border {
  border-bottom: 2px solid #555b60;
  border-radius: 15%;
}
.top-border {
  padding-top: 25px;
  border-top: 2px solid #555b60;
  border-radius: 15%;
}
.box {
  width: 100%;
  max-width: 550px;
  padding: 40px;
  position: relative;
  border-radius: 10%;
  background: #191919;
  text-align: center;
  transition: 0.25s;
  margin: 0px auto;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 100%;
  max-width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1,
h2,
h3 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  width: 100%;
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}

.forgot {
  text-decoration: underline;
  color: #fff;
}

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}
.social-network a:hover {
  transform: scale(1.15);
}
.social-network a.icoFacebook {
  background-color: #3b5998;
}

.social-network a.icoTwitter {
  background-color: #33ccff;
}

.social-network a.icoGoogle {
  background-color: #bd3518;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
  color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
  transition: all 0.8s;
  transition: all 0.8s;
}
</style>
