<template>
  <v-card
    class="px-4 py-2 mb-3 mx-auto d-flex align-center justify-space-between"
    elevation="3"
    rounded="xl"
    color="grey-darken-2"
    max-width="100%"
  >
    <slot name="left" />
    <div class="flex-grow-1">
      <slot />
    </div>
    <slot name="right" />
  </v-card>
</template>

<script setup>
</script>

<style scoped>
</style>
