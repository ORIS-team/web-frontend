<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Object Recognized Integrated System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="white--text">search</v-icon>
      </v-btn>
    </v-toolbar>

    <section class="container">
      <div>
        <Logo/>
        <h1 class="title">ORIS</h1>
        <h3 class="subtitle">
        </h3>
        <div class="links">
          <a href="https://github.com/ORIS-team" target="_blank" class="button--grey">GitHub</a>
        </div>
      </div>


    </section>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  data: {
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Poppins";
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
