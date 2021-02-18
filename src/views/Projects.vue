<template>
  <b-container fluid>
    <h1>Projects</h1>
    <CapstoneProject />
  </b-container>
</template>
<script>
import CapstoneProject from "@/components/CapstoneProject";
export default {
  name: "Projects",
  components: {
    CapstoneProject,
  },
};
</script>

<style lang="scss" scoped></style>
