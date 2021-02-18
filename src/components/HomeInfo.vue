<template>
  <div class="hello">
    <h1>Welcome To Yassin Al-Taha</h1>

    <div class="focus">
      <div class="focus--mask">
        <div class="focus--mask-inner">Portfolio</div>
      </div>
    </div>

    <h5>
      Award winning software developer,<br />
      graduated from Sheridan College with a degree in Computer System
      Analysis.<br />&#129302;
    </h5>
  </div>
</template>

<script>
export default {
  name: "HomeInfo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$componentSize: 300px;
$maskSize: 150px;
$speed: 1.5s;
$borderOffset: 8px;

$backgroundColor: #89cb66;
$animationProps: $speed linear infinite alternate;

@keyframes mask-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX($componentSize - $maskSize);
  }
}

@keyframes mask-inner-move {
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(10px+-($componentSize - $maskSize));
  }
}

.focus {
  margin: 1rem auto;
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--text-main-color);
  letter-spacing: 0.2rem;
  line-height: 1;
  position: relative;
  width: $componentSize;
  &:before {
    content: "Portfolio";
    filter: blur(3px);
  }
  &:after {
    content: "";
    position: absolute;
    width: $maskSize;
    height: calc(100% + #{$borderOffset});
    top: -($borderOffset / 2);
    left: 0;
    border-top: 2px solid;
    border-bottom: 2px solid;
    animation: mask-move $animationProps;
  }
  &--mask {
    overflow: hidden;
    position: absolute;
    width: $maskSize;
    height: 100%;
    top: 0;
    left: 0;
    background: $backgroundColor;
    animation: mask-move $animationProps;
    &-inner {
      animation: mask-inner-move $animationProps;
    }
  }
}

h5 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
