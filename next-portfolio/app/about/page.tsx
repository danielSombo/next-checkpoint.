import Profile from "../components/Profile";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">À propos de moi</h1>
            <Profile />
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Je suis un développeur passionné avec une expertise en création de sites web modernes. 
            J'utilise des technologies comme Next.js, Tailwind CSS, et plus encore pour créer des solutions élégantes.
            </p>
        </main>
    );
}