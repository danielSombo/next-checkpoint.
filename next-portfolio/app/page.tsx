import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur mon Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600">
        Découvrez mes compétences, mes projets, et contactez-moi.
      </p>
      <div className="mt-6 space-x-4">
        <Link href="/about" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" >
            À propos
        </Link>
        <Link href="/projects" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600" >
            Projets
        </Link>
        <Link href="/contact" className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" >
            Contact
        </Link>
      </div>
    </main>
  );
}
