export default function ContactPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Contactez-moi</h1>
            <form className="w-full max-w-md mt-6 space-y-4">
                <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                />
                <textarea
                    placeholder="Votre message"
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Envoyer
                </button>
            </form>
        </main>
    );
}