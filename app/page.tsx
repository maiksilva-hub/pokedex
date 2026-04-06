  import Link from "next/link";

  export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font">
  <h1 className="text-2x1 font-bold" >Home</h1>
  <Link className="mt-4 text-blue-600 underline hover:text-blue-800" 
  href='/users'>Ver usuários</Link>
    </div>
  );
}