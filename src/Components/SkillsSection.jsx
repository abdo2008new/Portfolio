import { use, useState } from "react";
import { cn } from "../Lib/Utils";

const skills =[ 
    //front-end
    {name: 'JavaScript', level: 'Intermediate' , category: 'front-end'},
    {name: 'React', level: 'Intermediate', category: 'front-end'},
    {name: 'CSS', level: 'Advanced', category: 'front-end'},
    {name: 'HTML', level: 'Advanced', category: 'front-end'},
    {name: 'Tailwind CSS', level: 'Intermediate', category: 'front-end'},

    //back-end
    {name: 'Python', level: 'Beginner', category: 'back-end'},
    {name: 'Node.js', level: 'Intermediate', category: 'back-end'},

    //tools
    {name: 'Git', level: 'Intermediate', category: 'tools'},
    {name: 'GitHub', level: 'Intermediate', category: 'tools'},
    {name: 'VS Code', level: 'Advanced', category: 'tools'},

];

const categories = ["all", "front-end", "back-end", "tools"];


const levelToPercent = {
Beginner: 40,
Intermediate: 70,
Advanced: 100,
};


export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);


    return (
<section id="skills" className="py-24 px-4 relative bg-secondary/30">
<div className="container mx-auto max-w-5xl"> 
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    My <span className="text-primary">Skills</span>
</h2>
<div className="flex flex-wrap justify-center gap-4  mb-12">
{categories.map((category) => (
    <button
    key={category}
    className={cn("py-2 px-5 rounded-full transition-colors duration-300 capitalize ", {
        "bg-primary text-white": activeCategory === category,
        "bg-secondary text-foreground": activeCategory !== category
    })}
    onClick={() => setActiveCategory(category)}
    >
    {category}
    </button>
))}

</div>



<div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredSkills.map((skill, key) => (
    <div key={skill} className="card-hover bg-card rounded-lg shadow-xs p-6">
        <div className="text-left mb-4"><h3 className="font-semibold text-lg">{skill.name}</h3></div>
        <div className="w-full bg-secondary/50 h-2 rounded-full overfull-hidden">
    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
    style={{ width: levelToPercent[skill.level] + '%' }} />
        </div>
<div className="text-right mt-1">
<span className="text-sm text-muted text-foreground">{levelToPercent[skill.level] + '%'}</span>
</div>
    </div>
))}
</div>
</div>
</section>
    )
}