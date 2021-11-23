<template>
  <v-app id="inspire" app dark>
    <v-container class="my-auto">
      <v-main>
        <slot></slot>
      </v-main>
    </v-container>
  </v-app>
</template>

<style>
html {
  overflow-y: auto;
}
</style>