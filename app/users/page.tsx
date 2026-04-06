import PokemonCard from "./_components/pokemon-card"

export default async function PokedexPage() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()

    const pokemonDetails = await Promise.all(
        data.results.map(async (p: any) => {
            const res = await fetch(p.url)
            return res.json()
        })
    )

    return (
        <div className="min-h-screen bg-zinc-950 p-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-black text-white mb-2 italic">POKEDEX</h1>
                    <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
                </header>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> 
                    {pokemonDetails.map((pokemon: any) => (
                        <PokemonCard 
                            key={pokemon.id} 
                            id={pokemon.id} 
                            name={pokemon.name}
                            image={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                            types={pokemon.types}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}