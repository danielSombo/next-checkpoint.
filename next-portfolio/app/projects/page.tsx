import Image from "next/image";

const projects = [
    { title: "Portfolio Personnel", description: "Un site portfolio moderne construit avec Next.js et Tailwind CSS pour présenter mes compétences.", link: "https://monportfolio.com", image: "/portfolio.jpg" },
    { title: "Application ToDo", description: "Une application web pour gérer des tâches, construite avec React et Tailwind CSS.", link: "https://todoapp.com", image: "/todo.jpg" },
    { title: "Site de Restaurant", description: "Un site web réactif pour un fictif, contruit avec HTML, CSS et Bootstrap.", link: "https://restaurant.com", image: "/restaurant.jpg" },
];

export default function ProjectsPage() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Mes Projets</h1>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded shadow hover:shadow-lg transition m-4"
                    >
                        <Image 
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={200}
                            className = "w-full rounded"
                        />
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >Voir le  projet</a>
                    </div>
                ))}
            </div>
        </main>
    );
}
