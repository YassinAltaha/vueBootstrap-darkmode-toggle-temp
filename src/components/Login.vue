<template>
  <b-container>
    <h1>Login Example</h1>
    <form class="box">
      <h1>Login</h1>
      <p class="text-muted">Please enter your login and password!</p>
      <input type="text" name="" placeholder="Username" />
      <input type="password" name="" placeholder="Password" />
      <a class="forgot " href="#">Forgot password?</a>
      <input type="submit" name="" value="Login" href="#" />
      <div class="col-md-12">
        <ul class="social-network social-circle">
          <li>
            <a href="#" class="icoFacebook" title="Facebook"
              ><i class="fab fa-facebook-f"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class=" text-white"
                >
                  <font-awesome-icon
                    class="i"
                    :icon="['fab', 'facebook-f']"
                  /></svg></i
            ></a>
          </li>
          <li>
            <a href="#" class="icoTwitter" title="Twitter"
              ><i class="fab fa-twitter"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-white"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path></svg></i
            ></a>
          </li>
          <li>
            <a href="#" class="icoGoogle" title="Google +"
              ><i class="fab fa-google-plus">
                <font-awesome-icon class="i" :icon="['fab', 'google']"/></i
            ></a>
          </li>
        </ul>
      </div>
    </form>
  </b-container>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* --login-container-background: #e5e5e5; */

.box {
  width: 100%;
  max-width: 550px;
  padding: 40px;
  position: relative;
  border-radius: 10%;
  background: var(--white-dark);
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
  color: var(--text-main-color);
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: var(--text-main-color);
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: var(--text-main-color);
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}

.forgot {
  text-decoration: underline;
  color: var(--text-main-color);
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
