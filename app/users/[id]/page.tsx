export default async function PokemonDetailPage(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    
    // Busca detalhes especificos do pokemon pelo ID
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await response.json()

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
            <img 
                src={pokemon.sprites.front_default} 
                alt={pokemon.name} 
                className="mx-auto w-48 h-48"
            />
            <div className="mt-4">
                <p><strong>Peso:</strong> {pokemon.weight}kg</p>
                <p><strong>Altura:</strong> {pokemon.height}m</p>
                <div className="mt-2">
                    <strong>Tipos:</strong>
                    {pokemon.types.map((t: any) => (
                        <span key={t.type.name} className="ml-2 px-2 py-1 bg-zinc-100 rounded text-sm">
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}