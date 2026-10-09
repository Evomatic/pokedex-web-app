import { infiniteQueryOptions, queryOptions } from '@tanstack/vue-query'


type PokemonSummary = {
  name: string
  url: string
}

type PokemonListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonSummary[]
}

type NamedAPIResource = {
  name: string
  url: string
}

type EvolutionDetail = {
  version_group: NamedAPIResource | null
  is_default: boolean
  item: NamedAPIResource | null
  trigger: NamedAPIResource | null
  gender: NamedAPIResource | null
  held_item: NamedAPIResource | null
  known_move: NamedAPIResource | null
  known_move_type: NamedAPIResource | null
  location: NamedAPIResource | null
  min_level: number | null
  min_happiness: number | null
  min_beauty: number | null
  min_affection: number | null
  near_special_rock: boolean
  needs_multiplayer: boolean
  needs_overworld_rain: boolean
  party_species: NamedAPIResource | null
  party_type: NamedAPIResource | null
  relative_physical_stats: number | null
  time_of_day: string
  trade_species: NamedAPIResource | null
  turn_upside_down: boolean
  region: NamedAPIResource | null
  required_pokemon_form: NamedAPIResource | null
  evolved_pokemon_form: NamedAPIResource | null
  used_move: NamedAPIResource | null
  min_move_count: number | null
  min_steps: number | null
  min_damage_taken: number | null
  allowed_natures: NamedAPIResource[] | null
  condition_expression: string | null
}

type EvolutionChainNode = {
  is_baby: boolean
  species: NamedAPIResource
  evolution_details: EvolutionDetail[]
  evolves_to: EvolutionChainNode[]
}

type EvolutionChainResponse = {
  id: number
  baby_trigger_item: NamedAPIResource | null
  chain: EvolutionChainNode
}

export function pokemonOptions() {
  return infiniteQueryOptions({
    queryKey: ['pokemon'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=20`)

      if (!response.ok) {
        throw new Error(`Failed to fetch pokemon options: ${response.statusText}`)
      }

      return (await response.json()) as PokemonListResponse
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return undefined
      }

      const nextOffset = new URL(lastPage.next).searchParams.get('offset')
      return nextOffset ? Number(nextOffset) : undefined
    },
  })
}

export function evolutionChainOptions(id: number) {
  return queryOptions({
    queryKey: ['evolution', id],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)

      if (!response.ok) {
        throw new Error(`Failed to fetch evolution chain: ${response.statusText}`)
      }

      return (await response.json()) as EvolutionChainResponse
    },
  })
}
