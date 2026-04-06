export default async function PokemonDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    // Busca os dados especificos do pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-8 flex flex-col items-center">
            <div className="max-w-xl w-full bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
                
                {/* Cabecalho com Nome e ID */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-black capitalize text-yellow-500">{pokemon.name}</h1>
                    <span className="text-2xl font-mono text-zinc-600">#{id.padStart(3, '0')}</span>
                </div>
                
                {/* Imagem Grande */}
                <div className="bg-zinc-800 rounded-2xl p-4 mb-8 flex justify-center shadow-inner">
                    <img 
                        src={pokemon.sprites.other['official-artwork'].front_default} 
                        alt={pokemon.name} 
                        className="w-72 h-72"
                    />
                </div>

                {/* Status Basicos */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700 text-center">
                        <p className="text-zinc-500 text-xs uppercase font-bold mb-1">Altura</p>
                        <p className="text-xl font-bold">{pokemon.height / 10} m</p>
                    </div>
                    <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700 text-center">
                        <p className="text-zinc-500 text-xs uppercase font-bold mb-1">Peso</p>
                        <p className="text-xl font-bold">{pokemon.weight / 10} kg</p>
                    </div>
                </div>

                {/* Tipos */}
                <div className="mb-8">
                    <p className="text-center text-zinc-500 text-sm mb-3">TIPO</p>
                    <div className="flex justify-center gap-3">
                        {pokemon.types.map((t: any) => (
                            <span key={t.type.name} className="px-6 py-2 rounded-full bg-yellow-500 text-zinc-900 font-black uppercase text-sm">
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Botao Voltar */}
                <a 
                    href="/users"
                    className="block text-center w-full py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-bold transition-all border border-zinc-700"
                >
                    VOLTAR PARA A LISTA
                </a>
            </div>
        </div>
    );
}