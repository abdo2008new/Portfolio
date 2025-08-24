import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react";

const projects = [
    {
        id: 1,
        title:"Youtube Clone",
        description:"A web application that mimics the core functionalities of YouTube, allowing users to browse, search, and watch videos.",
        imageUrl:"/projects/project1.png",
        tags: ["html", "css", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },
        {
        id: 2,
        title:"7erfa",
        description:"A web application that gives job offers to freelancers.",
        imageUrl:"/projects/project2.png",
        tags: ["html", "css", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },
        {
        id: 3,
        title:"Shoes Store",
        description:"A web application that allows users to browse and purchase shoes online.",
        imageUrl:"/projects/project3.png",
        tags: ["html", "css", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },
]



export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary mx-1">Projects</span></h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
                A selection of projects showcasing my skills and experience in web development, including front-end and back-end technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div  className="h-48 overflow-hidden ">
                        <img className="h-full w-full object-cover:scale-110 transition-transform duration-500 group-hover" src={project.imageUrl} alt={project.title} />
                    </div>
                    <div className="p-6 ">
                        <div className=" flex flex-wrap gap-2 mb-4 ">
                        {project.tags.map((tag)=>(
                            <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/17 text-secondary-foreground ">
                                {tag}
                            </span>
                        ))}
                        </div>
                    <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center  ">
                        <div className="flex space-x-2">
                        <a size={20} href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                        <a size={20} href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" >   <Github /></a>
                        </div>
                                            </div> 
                    </div>
                </div>
            ))}
            </div>

            <div className="text-center mt-12 ">
            <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/abdo2008new">
                Check My  Github <ArrowRight size={16}/>
                </a>
            </div>


            </div>
        </section>
    );
};
