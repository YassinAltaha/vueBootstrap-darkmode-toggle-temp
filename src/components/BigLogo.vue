<template>
  <div class="ml">
    <div class="hextainer1">
      <div class="hex1"></div>
    </div>
    <div class="hextainer2">
      <div class="hex2"></div>
    </div>
    <div class="hextainer2and5">
      <div class="hex2and5"></div>
    </div>
    <div class="hextainer3">
      <div class="hex3"></div>
    </div>
    <div class="hextainer4">
      <div class="hex4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin hexagon($size, $color) {
  position: relative;
  width: $size;
  height: $size / 1.76;
  background-color: $color;
  margin: 0 0;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: $size / 2 solid transparent;
    border-right: $size / 2 solid transparent;
  }
  &:before {
    bottom: 100%;
    transform: translateX(-$size * 0.5);
    border-bottom: $size / 3.5 solid $color;
  }
  &:after {
    top: 100%;
    transform: translateX(-$size * 0.5);
    border-top: $size / 3.5 solid $color;
  }
}
@mixin hextainer($pos, $alpha, $deg) {
  position: $pos;
  opacity: $alpha;

  //   margin-left: 42vw;

  transform: rotate($deg);
}
$hex-size: 200px;
.ml {
  display: block;
  margin: 0 auto;
  height: $hex-size * 1.25;
  width: $hex-size;
}
.ml:hover {
  .hextainer3 {
    transform: translateY(99%);
  }
  .hextainer4 {
    transform: translateY(-98%);
  }
}

.hex1 {
  @include hexagon($hex-size, var(--hex-big-color));
}
.hextainer1 {
  @include hextainer(relative, 0.7, 0);

  top: 75px;
  left: 0px;
}
$second-hex: $hex-size * 0.75;
$second-hex-x-pos: $hex-size * 0.125;
.hex2 {
  @include hexagon($second-hex, var(--hex-second-top-color));
}
.hextainer2 {
  @include hextainer(relative, 0.6, 0);
  top: -$second-hex * 0.36;
  left: $second-hex-x-pos;
}
.hex2and5 {
  @include hexagon($second-hex, var(--hex-second-bottom-color));
}
.hextainer2and5 {
  @include hextainer(relative, 0.6, 0);
  top: -$second-hex * 0.54;
  left: $second-hex-x-pos;
}
$third-hex: $hex-size * 0.507;
.hex3 {
  @include hexagon($third-hex, var(--hex-thrid-top-color));
}
.hextainer3 {
  @include hextainer(relative, 0.6, 0);
  top: -$hex-size * 1.19;
  left: $hex-size * 0.2499;
}
.hex4 {
  @include hexagon($third-hex, var(--hex-thrid-bottom-color));
}
.hextainer4 {
  @include hextainer(relative, 0.6, 0);
  top: -$hex-size * 0.91;
  left: $hex-size * 0.2499;
}
@media only screen and (max-width: 1020px) {
  //   .ml {
  //     height: 17px;
  //     margin-top: 5vh;
  //   }
}
</style>
