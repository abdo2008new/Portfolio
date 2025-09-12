import {cn} from "../Lib/Utils"
import { useEffect,useState } from "react";
import { X, Menu } from "lucide-react";


const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]


export const ThenavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);



    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);


    return (
        <nav className={cn("fixed w-full z-50  transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#home" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Abderrahmane-Tamine</span>&nbsp;Portfolio
                    </span>
                </a>

               {/* Desktop version */}
        <div className=" hidden md:flex space-x-8 mr-10 ">
            {navItems.map((item,key) => (
                <a key={key} href={item.href} className="  text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                </a>
                
            ))}

        </div>




                {/* Mobile version */}

<button className="mr-18 md:hidden p-2 text-foreground z-50"
aria-label={isMenuOpen ? "Close menu" : "Open menu"} onClick={() => setIsMenuOpen(prev => !prev)}>{isMenuOpen? <X size={24}/> :<Menu size={24}/>}</button>

<div
    className={cn(
        "fixed inset-0 z-40 flex items-center justify-center backdrop-blur-md bg-background/80",
        "transition-all duration-300 md:hidden",
        isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
    )}
>
            <div className="flex flex-col items-center space-y-8 text-xl">
                {navItems.map((item,key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
            </div>
        </nav>
    );
};

