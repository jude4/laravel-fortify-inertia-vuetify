<template>
  <v-app id="inspire" app dark>
    <v-container class="my-auto">
      <nav-bar></nav-bar>
      <v-main>
        <v-row>
          <v-col>
            <slot></slot>
          </v-col>
        </v-row>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: { NavBar },
};
</script>

<style>
html {
  overflow: auto;
}
</style>