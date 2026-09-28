<template>
  <UApp>
    <VueQueryDevtools :initial-is-open="true" />
    <UHeader mode="slideover" class="bg-fire-background border-in border-inherit max-w-full">
      <template #title>
          <Icon mode="svg" size="2em" class="Logo" name="svg:pokedex-logo" />
      </template>
      <template #right/>
    </UHeader>
    <UMain class="bg-gray-100">
      <NuxtPage />
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>
