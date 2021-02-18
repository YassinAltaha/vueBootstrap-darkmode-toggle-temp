<template>
  <b-container>
    <div class="hover">
      <span>Contact info</span
      ><a
        class="social-link"
        href="mailto: yassin.altaha@gmail.com"
        target="_blank"
      >
        <font-awesome-icon class="i" :icon="['fab', 'google']"/></a
      ><a
        class="social-link"
        href="mailto: yassin.altaha@gmail.com"
        target="_blank"
      >
        <font-awesome-icon class="i" :icon="['fas', 'phone']"/></a
      ><a
        class="social-link"
        href="https://www.linkedin.com/in/yassin-altaha"
        target="_blank"
      >
        <font-awesome-icon class="i" :icon="['fab', 'linkedin-in']"
      /></a>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$base-duration: 250ms;

// Colors
$primary: var(--contact-btn-background);
$accent: #000;
$white: whitesmoke;
$color-3: #bdc3c7;

// Breakpoints
$sm: 20rem;
$med: 48rem;
$lg: 64rem;

.hover {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 75px;
  background-color: var(--contact-btn-background);
  border-radius: 99px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;

    //letter-spacing: -0.0625rem;
    transition: 0.25s linear;
    z-index: 1;
  }
  &:before {
    content: "";
    left: 0;
    justify-content: flex-end;
    background-color: var(--contact-btn-background);
  }
  &:after {
    content: "";
    right: 0;
    justify-content: flex-start;
    background-color: var(--contact-btn-highlight);
  }
  &:hover {
    background-color: $accent;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    span {
      opacity: 0;
      z-index: -3;
    }
    &:before {
      opacity: 0.5;
      transform: translateY(-100%);
    }
    &:after {
      opacity: 0.5;
      transform: translateY(100%);
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: $white;
    font-family: "Fira Mono", monospace;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
  }
  .social-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    color: $white;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    .i {
      text-shadow: 1px 1px rgba($accent, 0.7);
      transform: scale(1);
    }
    &:hover {
      background-color: rgba($white, 0.1);
      .i {
        animation: bounce 0.4s linear;
      }
    }
  }
}

@keyframes bounce {
  40% {
    transform: scale(1.4);
  }
  60% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
