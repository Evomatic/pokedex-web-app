<template>
  <div>
    <ul>
      <li v-for="pokemon in pokemonQuery?.pages.flatMap((page) => page.results) ?? []" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useInfiniteQuery, useQuery } from '@tanstack/vue-query'
import { pokemonOptions, evolutionChainOptions } from '../queries'
import { watch } from 'vue'

const { data: pokemonQuery } = useInfiniteQuery(pokemonOptions())
const { data: evolutionChainQuery } = useQuery(evolutionChainOptions(1))

watch(pokemonQuery, () => {
  console.log('pokemonQuery changed:', pokemonQuery.value)
})

watch(evolutionChainQuery, () => {
  console.log('evolutionChainQuery changed:', evolutionChainQuery.value?.chain.species.name)
})
</script>

