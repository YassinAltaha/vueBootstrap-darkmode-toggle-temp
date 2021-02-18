<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" sm="12"><LoginComp /></b-col>
      <b-col md="6" sm="12"> <SignupComp /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import LoginComp from "@/components/Login";
import SignupComp from "@/components/Signup";

export default {
  name: "Login-Signup",
  components: {
    LoginComp,
    SignupComp,
  },
};
</script>

<style></style>
