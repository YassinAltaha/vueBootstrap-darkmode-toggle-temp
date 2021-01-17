<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-button pill v-bind:variant="variant">Button</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
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
