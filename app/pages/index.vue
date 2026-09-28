<template>
  <div />
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { listPokemonOptions } from '../api'
import { onMounted } from 'vue'


const { data: pokemonOptions } = useQuery({
  queryKey: ['pokemonOptions'],
  queryFn: listPokemonOptions
})

onMounted(() => {
  console.log('pokemonOptions', pokemonOptions)
})
</script>

