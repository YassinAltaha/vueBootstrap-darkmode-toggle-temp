<template>
  <div class="footer-text shadow-footer">
    <!-- Footer Links -->
    <div class="container text-center text-md-left pt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold">Web Deisgner Joke</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p class="footer-secondary">
            A web designer walks into a bar, but immediately leaves in disgust
            upon noticing the tables layout.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Skills</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto "
            style="width: 60px;"
          />
          <div class="footer-secondary">
            <p>
              Vue
            </p>
            <p>
              JavaScript
            </p>
            <p>
              Bootstrap
            </p>
            <p>
              Node
            </p>
          </div>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Hobbies</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto footer-secondary"
            style="width: 60px;"
          />
          <div class="footer-secondary">
            <p>
              Hiking
            </p>
            <p>
              Basketball
            </p>
            <p>
              Drawing
            </p>
            <p>
              Photography
            </p>
          </div>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto footer-secondary"
            style="width: 60px;"
          />
          <div class="footer-secondary">
            <p><i class="fas fa-home mr-3"></i> Mississauga, ON, Canada</p>
            <p><i class="fas fa-envelope mr-3"></i> Yassin.altaha@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +1 647 962 6206</p>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer-text {
  color: var(--main-text-color);
  background-color: var(--footer-background);
}
.footer-secondary {
  color: var(--text-secondary-color);
}
</style>
