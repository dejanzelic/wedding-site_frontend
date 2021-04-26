<template>
<div class="nav-centered">
    <div class="container">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand href="#"
          class="font-weight-bold navbar-brand-centered">
          zelic
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
