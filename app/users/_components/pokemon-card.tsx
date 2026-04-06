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
            <div className="rounded-lg border border-zinc-200 p-4 hover:shadow-md transition-shadow bg-white text-center">
                <img 
                    src={image} 
                    alt={name} 
                    className="mx-auto w-24 h-24" 
                />
                <p className="text-sm text-zinc-400">#{id}</p>
                <p className="font-bold capitalize text-lg mb-2">{name}</p>
                
                <div className="flex justify-center gap-2">
                    {types.map((t: any) => (
                        <span 
                            key={t.type.name} 
                            className="text-xs px-2 py-1 rounded bg-zinc-100 font-medium"
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>
                <p className="text-blue-500 text-xs mt-4">ver detalhes</p>
            </div>
        </Link>
    )
}