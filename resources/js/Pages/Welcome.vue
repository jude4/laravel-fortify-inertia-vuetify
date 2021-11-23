<template>
  <app-layout>
      <inertia-head title="Welcome to the easiest delivery platform" />
      <h2 class="text-center mb-3">Welcome</h2>
      <v-col>
        <v-img src="assets/01.jpg" contain height="300"></v-img>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </v-card-text>
      </v-col>
  </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
  components: { AppLayout },
};
</script>
