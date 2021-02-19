<template>
  <b-container fluid>
    <div class="box">
      <b-row>
        <b-col lg="6" md="12" sm="12" xs="12"
          ><b-embed
            class="video"
            type="iframe"
            aspect="1by1"
            src="https://www.youtube.com/embed/x56Z5eIMPjo"
            allowfullscreen
          ></b-embed
        ></b-col>
        <b-col lg="6" md="12" sm="12" xs="12" class="info-colum">
          <h3>Capstone Project</h3>
          <p>
            Automated Sheridan’s capstone program duties, by designing and
            developing a one stop online portal.
          </p>
          <h4>Responsibilities</h4>
          <p>
            Setting up Spring Security to handle role-based authentication and
            authorization. configuring hibernate to connect to MySQL server, and
            map out the relations between the clients and students needed to
            manage their respective projects and groups. At the same time,
            professors needed admin users and print out necessary reports. using
            Theymleaf we parsed the middleware data, and bootstrap to wrap it up
            using nice prebuilt components.
          </p>

          <h4>Technology</h4>
          <li>MySQL | Tomcat | LinuxOS</li>
          <li>Hibernate | Spring Security | Spring MVC | Maven</li>
          <li>Theymleaf | Bootstrap | Html5 | CSS</li>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  min-width: 320px;
  padding: 40px;
  position: relative;
  border-radius: 5%;
  background: var(--white-dark);
  text-align: left;
  transition: 0.25s;
  margin: 0px auto;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
}
.video {
  border-radius: 5%;
}

.info-colum {
  padding-top: 1.5rem;
  margin: auto 0px;
}
</style>
