import { Mail, Phone,MapPin, Linkedin, Instagram,Facebook,Send } from "lucide-react";
import {cn} from "../Lib/Utils.js";

export const ContactSection = ()=> {
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center "> 
                Get In <span className="text-primary ">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground  mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects
                , creative ideas, or opportunities to be part of your visions.
                Feel free to reach out through any of the platforms below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 ">
        <h3 className="text-2xl font-semibold mb-6">
            Contact Information
        </h3>
        <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-medium ">Email</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:tamine.abderrahman@gmail.com">tamine.abderrahman@gmail.com</a>
                </div>
            </div>
            <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-medium ">Phone</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+213660968364">+213660968364</a>
                </div>
            </div>
                <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-medium ">Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors"> Alger ,BabaHassen </a>
                </div>
            </div>
            
        </div>
        <div className="pt-8">
        <h4 className="font-medium mb-4 ">Connect With Me</h4>
        <div className="flex space-x-4 justify-center">
        <a target="_blank" href="https://www.linkedin.com/in/abderrahmane-tamine/"><Linkedin className="h-6 w-6 text-primary" /></a>
        <a target="_blank" href="https://www.instagram.com/abderrahmane_tmn/"><Instagram className="h-6 w-6 text-primary" /></a>
        <a target="_blank" href="https://www.facebook.com/abderrahmene.tamine"><Facebook className="h-6 w-6 text-primary" /></a>
        </div>
        </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs">
        <h3 className="text-2xl font-semibold mb-6 ">Send a Message</h3>
        <form className="space-y-6">
        <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name </label>
            <input type="text" id="name" required placeholder="Dean Winchester..." className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
                <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email </label>
            <input type="email" id="email" required placeholder="Dean.Winchester@gmail.com" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
                <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message </label>
            <textarea id="message" required placeholder="I'm interested in..." className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none resize-none focus:ring-2 focus:ring-primary" />
        </div>
        <button type="submit" className={cn("inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50")}>
        <Send size={20} /> Send Message
        </button>
        </form>
        </div>
            </div>
            </div>
        </section>
    )
}