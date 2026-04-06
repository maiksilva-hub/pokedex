import Link from "next/link"

type PokemonCardProps = {
    id: number;
    name: string;
    image: string;
    types: any[];
}

export default function PokemonCard({ id, name, image, types }: PokemonCardProps) {
    return (
        <Link href={`/users/${id}`}>
            <div className="rounded-xl border border-zinc-800 p-5 hover:scale-105 transition-transform bg-zinc-900 text-center shadow-xl group">
                <div className="bg-zinc-800 rounded-lg p-2 mb-4 group-hover:bg-zinc-700 transition-colors">
                    <img 
                        src={image} 
                        alt={name} 
                        className="mx-auto w-32 h-32 pixelated" 
                    />
                </div>
                
                <p className="text-sm font-mono text-zinc-500">#{id.toString().padStart(3, '0')}</p>
                <h2 className="text-xl font-black capitalize text-white mb-3 tracking-wide">{name}</h2>
                
                <div className="flex justify-center gap-2 mb-4">
                    {types.map((t: any) => (
                        <span 
                            key={t.type.name} 
                            className="text-xs px-3 py-1 rounded-full bg-zinc-700 text-zinc-200 font-bold uppercase border border-zinc-600"
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>
                
                <p className="text-yellow-500 font-bold text-sm group-hover:underline">VER DETALHES</p>
            </div>
        </Link>
    )
}