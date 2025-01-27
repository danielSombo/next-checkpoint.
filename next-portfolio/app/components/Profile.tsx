import Image from "next/image";

export default function Profile() {
    return (
        <div className="flex flex-col items-center">
            <Image 
                src = "/profile.jpg"
                alt = "Photo de profil"
                width = {150}
                height={150}
                className="rounded-full"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">Esli Daniel Sombo</h2>
            <p className="mt-2 text-blue-700">Développeur Web | Créateur de solution digitales</p>
        </div>
    )
}