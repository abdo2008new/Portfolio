import { ArrowUp } from "lucide-react";
export const Footer = () => {
    return (
        <footer className="relative z-10 bg-gray-800 text-white py-4 mt-8">
            <div className="relative z-10  container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Abderrahmane.Tamine. &nbsp; All rights reserved.</p>
                <a href="#home" className="text-primary hover:underline"><ArrowUp /></a>
            </div>
        </footer>
    );
}