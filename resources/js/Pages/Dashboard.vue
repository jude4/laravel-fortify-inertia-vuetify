<template>
  <app-layout>
      <h2 class="text-center mb-3" v-if="$page.props.user.name">Welcome to your Dashboard, {{ $page.props.user.name }}</h2>
      
      <v-col>
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
