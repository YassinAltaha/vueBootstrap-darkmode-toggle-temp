<template>
  <div id="app" v-bind:class="mode">
    <div>
      <b-navbar toggleable="lg" v-bind:type="mode" v-bind:variant="variant">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
          <!-- Center aligned Nav Items -->
          <b-navbar-nav class="ml-auto">
            <h4>
              <b-nav-text>{{ pageTitle }}</b-nav-text>
            </h4>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar v-bind:variant="btnVariant"></b-avatar>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-form class="m-auto">
              <label class="switch" @change="toggleTheme">
                <input type="checkbox" />
                <div>
                  <span>{{ mode }}</span>
                </div>
              </label>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid class="main-content">
      <router-view />
    </b-container>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  created() {
    this.mode = this.$store.getters.currentMode;
    this.variant = this.$store.getters.navVariant;
    this.btnVariant = this.$store.getters.btnVariant;
  },
  data() {
    return {
      mode: "",
      variant: "",
      pageTitle: "",
    };
  },
  methods: {
    toggleTheme() {
      this.$store.commit("toggleMode");
      // console.log(this.$store.getters.currentMode);
      // console.log(this.$store.getters.btnVariant);
      // console.log(this.$store.getters.navVariant);
      this.btnVariant = this.$store.getters.btnVariant;
      this.mode = this.$store.getters.currentMode;
      this.variant = this.$store.getters.navVariant;
      // this.variant = this.variant === "info" ? "success" : "info";
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
};
</script>

<style lang="scss">
.light {
  --background-color: #ffffff;
  --main-text-color: #000000;
  --footer-background: var(--primary);
}
.dark {
  --background-color: #000000;
  --main-text-color: #ffffff;
  --footer-background: var(--dark);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--main-text-color);
}
.main-content {
  min-height: 80vh;
}
.footer {
  margin-top: 2.5rem;
  width: 100%;
  background-color: var(--footer-background);
}
.switch {
  margin-left: auto;
  --line: #505162;
  --dot: #f7f8ff;
  --circle: #9ea0be;
  --duration: 0.3s;
  // --text: #222;
  --text: var(--main-text-color);
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
        color: var(--text);
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
