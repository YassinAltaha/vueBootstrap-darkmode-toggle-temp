<template>
  <b-container>
    <b-row>
      <b-col xl="4" lg="4" md="12" sm="12"> <about-profile /></b-col>

      <b-col xl="8" lg="8" md="12" sm="12">
        <AboutTimeline />
        <skill-chart
      /></b-col>
    </b-row>
  </b-container>
</template>
<script>
import AboutTimeline from "@/components/AboutTimeline.vue";
import SkillChart from "@/components/SkillChart.vue";
import AboutProfile from "@/components/AboutProfile.vue";

export default {
  name: "About",
  components: {
    SkillChart,
    AboutProfile,
    AboutTimeline,
  },
};
</script>
<style lang="scss" scoped>
.tedt {
  color: var(--t-test);
}
</style>
