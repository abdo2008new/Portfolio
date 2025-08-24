import { Briefcase, Code,User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 realtive">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech creator</h3>
        <p className="text-muted-foreground">
            I specialize in building responsive and accessible web applications
            that provide a great user experience. My goal is to create
            innovative solutions that make a difference.
        </p>
        <p className="text-muted-foreground">
            I am constantly learning and adapting to new technologies and
            best practices in the industry. My passion for coding drives me
            to create high-quality software that meets the needs of users
            and businesses alike.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button"> Get in Touch</a>
        <a href="/projects/Abderrahmane-tamine%20CV.pdf" download className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-background transition-colors duration-300">Download CV</a>
        </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex  gap-4 items-start">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="texte-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                            Crafting responsive and dynamic websites with modern
                            technologies to deliver seamless user experiences.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="texte-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                            Crafting user-centered designs that enhance usability
                            and accessibility across all devices.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="texte-left">
                        <h4 className="font-semibold text-lg ">Project Management</h4>
                        <p className="text-muted-foreground">
                            Overseeing projects from conception to completion,
                            ensuring they meet client expectations and deadlines.
                        </p>
                        </div>
                    </div>
                </div>

            </div>
                </div>
            </div>
        </section>
    );
};
