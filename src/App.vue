<template>
  <div id="app" v-bind:class="mainBackground">
    <b-navbar
      toggleable="lg"
      :type="navText"
      :variant="mainBackground"
      class="shadow-sm sticky-top nav-addons"
    >
      <b-navbar-brand class="" href="#">
        <ExoLogo />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="custom-nav-hover">
          <router-link to="/"><b-nav-item to="/">Home</b-nav-item></router-link>
          <router-link to="/about"
            ><b-nav-item to="/about">About</b-nav-item></router-link
          >
          <router-link to="/projects"
            ><b-nav-item to="/projects">Project</b-nav-item></router-link
          >
          <router-link to="/weather"
            ><b-nav-item to="/weather">Weather App</b-nav-item></router-link
          >
          <router-link to="/login"
            ><b-nav-item to="/login">Login-Signup</b-nav-item></router-link
          >
        </b-navbar-nav>
        <!-- Center aligned Nav Items -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="custom-drop-down" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar
                v-bind:variant="btnBackground"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                class="shadow"
              ></b-avatar>
            </template>
            <b-dropdown-item to="/">Home</b-dropdown-item>
            <b-dropdown-item to="/about">About</b-dropdown-item>
            <b-dropdown-item to="/projects">Project</b-dropdown-item>

            <b-dropdown-item to="/weather">Weather-App</b-dropdown-item>
            <b-dropdown-item to="/login">Login-Signup</b-dropdown-item>
            <b-dropdown-item to="/notFound">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form class="m-auto">
            <label class="switch" @change="toggleTheme">
              <input type="checkbox" />
              <div>
                <span>{{ mainBackground | capitalize }}</span>
              </div>
            </label>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid no-gutters class="main-content ">
      <router-view />
    </b-container>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import ExoLogo from "@/components/ExoLogo";
export default {
  name: "App",
  components: {
    ExoLogo,
    Footer,
  },
  created() {
    this.$store.watch(() => {
      this.theme = this.$store.getters.exotheme;
      this.navBackground = this.theme.navBackground;
      this.mainBackground = this.theme.mainBackground;
      this.btnBackground = this.theme.btnBackground;
      this.navText = this.theme.navText;
    });
  },

  data() {
    return {
      theme: {},
      mainBackground: "",
      navBackground: "",
      navText: "",
      pageTitle: "",
    };
  },
  methods: {
    toggleTheme() {
      this.$store.commit("toggleTheme");
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Yassin Portfolio";
        this.pageTitle = to.meta.title;
      },
    },
  },
  filters: {
    capitalize: (value) => {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style lang="scss">
/*
MAIN THEME CONTROLLER
*/
.light {
  --white-dark: #fff;
  --background-color: #e7e7e7;
  --text-main-color: #000000;
  --background-secondary-color: #fdfdfd;
  --text-secondary-color: #3a3a3a;
  --footer-background: var(--dark-primary);
  --logo-text: var(--btn-color);
  /* Logo Colors */
  --hex-big-color: #cae718;
  --hex-second-top-color: #20c997;
  --hex-second-bottom-color: #6f42c1;
  --hex-thrid-top-color: #2a9fd6;
  --hex-thrid-bottom-color: #ff8566;
  /* -------- */
  /* Nav Buttons */
  --nav-color: #a972cb;
  --nav-hover: #{adjust-hue(#a972cb, 45deg)};
  --nav-background-color: #333b3f;
  --nav-drop-down-hover: #e5e5e5;
  --nav-text-hover: #fff;
  /* --------------------- */
  /* Chart Colors */
  --chart-background: #17141d;
  /* Timeline Colors */
  --timeline-background: #fff;
  --timeline-text-header: #1a1918;
  --timeline-text-content: #3f3c3a;
  --timeline-info-text: #1d1d1d;
  --timeline-info-background: #bfbfbf;
  /* --------------------- */
  /* Contact me  Colors */
  --contact-btn-background: #46627f;
  --contact-btn-highlight: #3d556f;
  // $contact-btn-background: #46627f;

  --weather-text-highlight: linear-gradient(90deg, #0011ff, #ba2ee5);
}
.dark {
  --white-dark: #1a1a1a;
  --background-color: #000;
  --text-main-color: #ffffff;
  --background-secondary-color: #878787;
  --text-secondary-color: #dfdfdf;
  --footer-background: var(--btn-color);
  --logo-text: var(--dark-primary);
  /* Logo Colors */
  --hex-big-color: #0475a7;
  --hex-second-top-color: #c92052;
  --hex-second-bottom-color: #55c142;
  --hex-thrid-top-color: #d6612a;
  --hex-thrid-bottom-color: #8666ff;
  /* -------- */
  /* Nav Buttons */
  --nav-color: #a972cb;
  --nav-hover: #{adjust-hue(#a972cb, 45deg)};
  --nav-background-color: #333b3f;
  --nav-drop-down-hover: #505050;
  --nav-text-hover: #000;
  /* --------------------- */
  /* Chart Colors */

  --chart-background: #dfdfdf;

  /* Timeline Colors */
  --timeline-background: #333c42;
  --timeline-text-header: #e5e6e7;
  --timeline-text-content: #c0c3c5;
  --timeline-info-text: #e2e2e2;
  --timeline-info-background: #1b1b1b;
  /* --------------------- */
  /* Contact me  Colors */
  --contact-btn-background: #fe9e3b;
  --contact-btn-highlight: #db9e5e;
  --weather-text-highlight: linear-gradient(90deg, #55c142, #db9e5e);
}

/*
rest of scss
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 375px;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-main-color);
}

.main-content {
  padding: 1.5rem 0px 0px 0px !important;
  min-height: 100vh;
}
.footer {
  margin-top: 2.5rem;
  width: 100%;
}

.custom-drop-down {
  .dropdown-menu {
    border: 3px solid;
    border-radius: 6px;
    //border-color: var(--text-secondary-color);
    border-color: #a972cb;
    background-color: var(--background-secondary-color);
    .dropdown-item {
      //color: var(--main-text-color);
      color: var(--text-main-color);
      &:hover {
        background-color: var(--nav-drop-down-hover);
      }
    }
  }
}

.custom-nav-hover {
  margin-left: 3vw;
  .nav-link {
    width: 100%;
    height: 100%;
    text-decoration: none !important;
  }
  .nav-item {
    background: none;
    border: 2px solid;
    border-radius: 6px;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 0.25em 2em;
    ////
    color: var(--nav-color);
    transition: 0.25s;

    &:hover,
    &:focus {
      text-decoration: none;

      border-color: var(--nav-hover);
      color: #fff;
    }
  }
  .nav-item:hover,
  .nav-item:focus {
    box-shadow: inset 0 0 0 4em var(--nav-hover);
  }
}
//Theme Toggler scss
.switch {
  margin-left: auto;
  --line: #505162;
  --dot: #9ea0be;
  --circle: #9ea0be;
  --text: var(--text-main-color);
  --duration: 0.3s;

  // --text: var(--text-main-color);
  cursor: pointer;
  input {
    display: none;
    & + div {
      position: relative;
      &:before,
      &:after {
        --s: 1;
        content: "";
        position: absolute;
        height: 4px;
        top: 10px;
        width: 24px;
        background: var(--line);
        transform: scaleX(var(--s));
        transition: transform var(--duration) ease;
      }
      &:before {
        --s: 0;
        left: 0;
        transform-origin: 0 50%;
        border-radius: 2px 0 0 2px;
      }
      &:after {
        left: 28px;
        transform-origin: 100% 50%;
        border-radius: 0 2px 2px 0;
      }
      span {
        padding-left: 56px;
        line-height: 24px;
        &:before {
          --x: 0;
          --b: var(--circle);
          --s: 4px;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          box-shadow: inset 0 0 0 var(--s) var(--b);
          transform: translateX(var(--x));
          transition: box-shadow var(--duration) ease,
            transform var(--duration) ease;
        }
        &:not(:empty) {
          padding-left: 64px;
        }
      }
    }
    &:checked {
      & + div {
        &:before {
          --s: 1;
        }
        &:after {
          --s: 0;
        }
        span {
          &:before {
            --x: 28px;
            --s: 12px;
            --b: var(--dot);
          }
        }
      }
    }
  }
}
</style>
