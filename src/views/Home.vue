<template>
  <b-container fluid>
    <b-row>
      <b-col xl="12" lg="5" md="12" sm="12">
        <div>
          <Logo />
        </div>
      </b-col>
      <b-col xl="12" lg="5" md="12" sm="12">
        <HomeInfo />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HomeInfo from "@/components/HomeInfo.vue";
import Logo from "@/components/BigLogo";

export default {
  name: "Home",
  components: {
    HomeInfo,
    Logo,
  },
  data() {
    return {
      variant: this.$store.getters.btnVariant,
    };
  },
  created() {
    this.$store.watch(() => {
      this.variant = this.$store.getters.btnVariant;
    });
  },
};
</script>
