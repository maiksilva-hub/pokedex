import PokemonCard from "./_components/pokemon-card"

export default async function PokedexPage() {
    // 1. Busca a lista inicial (ex: os primeiros 151 pokemons)
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()

    // 2. Para cada pokemon na lista, busca os detalhes completos
    const pokemonDetails = await Promise.all(
        data.results.map(async (p: any) => {
            const res = await fetch(p.url)
            return res.json()
        })
    )

    return (
        <div className="mx-auto max-w-4xl p-8">
            <h1 className="mb-8 text-3xl font-bold text-center">Pokedex Completa</h1>
            
            {/* Grid para exibir os cards lado a lado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
                {pokemonDetails.map((pokemon: any) => (
                    <PokemonCard 
                        key={pokemon.id} 
                        id={pokemon.id} 
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                    />
                ))}
            </div>
        </div>
    )
}